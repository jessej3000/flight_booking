package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"reflect"
	"strconv"

	"github.com/gorilla/mux"
)

// getSeats gets list of seats that has been booked
func getSeats(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]

	query := "SELECT id,plane,seats FROM planes WHERE "
	query += "id="
	query += id

	rows, err := db.Query(query)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	var returnMsg result
	for rows.Next() {
		var ID int
		var PlaneName string
		var PlaneSeats seats
		err = rows.Scan(&ID, &PlaneName, &PlaneSeats)

		if err != nil {
			fmt.Println("Error in getSeats: ", err.Error())
		}
		returnMsg = result{"ID": ID, "Name": PlaneName, "Seats": PlaneSeats}
	}
	json.NewEncoder(w).Encode(returnMsg)
}

// addFlight Add new flight
func addFlight(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {

		plane := r.FormValue("plane")
		departure := r.FormValue("departure")
		arrival := r.FormValue("arrival")
		origin := r.FormValue("origin")
		destination := r.FormValue("destination")
		seatrows := r.FormValue("seatrows")
		rows := r.FormValue("rows")
		aorder, _ := strconv.Atoi(r.FormValue("aorder"))

		assignmentOrdering := "0"
		seatIndexes := "0"

		for i := 1; i < aorder; i++ {
			assignmentOrdering += ",0"
			seatIndexes += ",0"
		}

		stmtIns, err := db.Prepare("INSERT INTO planes(plane,departure,arrival,origin,destination,seatsrow,rows,aorder,seats) VALUES(?,?,?,?,?,?,?,?,?)") // ? = placeholder
		if err != nil {
			returnMsg := mainResult{Code: 3, Payload: nil, Message: "Unable prepare flight."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}
		defer stmtIns.Close()

		_, err = stmtIns.Exec(plane, departure, arrival, origin, destination, seatrows, rows, assignmentOrdering, seatIndexes)
		if err != nil {
			returnMsg := mainResult{Code: 2, Payload: nil, Message: "Unable to add flight."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		results, err := getAllFlights()
		if err != nil {
			fmt.Println(err)
			returnMsg := mainResult{Code: 4, Payload: nil, Message: "Unable to refresh data."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		returnMsg := mainResult{Code: 0, Payload: results, Message: "Successfully added flight."}
		json.NewEncoder(w).Encode(returnMsg)
	} else {
		returnMsg := mainResult{Code: 1, Payload: nil, Message: "Invalid Access"}
		json.NewEncoder(w).Encode(returnMsg)
	}
}

// getFlights get all available flights
func getFlights(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {

		results, err := getAllFlights()
		if err != nil {
			fmt.Println(err)
			returnMsg := mainResult{Code: 4, Payload: nil, Message: "Unable to refresh data."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		returnMsg := mainResult{Code: 0, Payload: results, Message: "Successfully added flight."}
		json.NewEncoder(w).Encode(returnMsg)
	} else {
		returnMsg := mainResult{Code: 1, Payload: nil, Message: "Invalid Access"}
		json.NewEncoder(w).Encode(returnMsg)
	}
}

// deleteFlight remove a flight from database
func deleteFlight(w http.ResponseWriter, r *http.Request) {
	if r.Method == POST {

		id := r.FormValue("id")

		fmt.Println(id)

		stmtIns, err := db.Prepare("DELETE FROM planes WHERE id=?") // ? = placeholder
		if err != nil {
			returnMsg := mainResult{Code: 7, Payload: nil, Message: "Unable prepare flight."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}
		defer stmtIns.Close()

		_, err = stmtIns.Exec(id)
		if err != nil {
			returnMsg := mainResult{Code: 6, Payload: nil, Message: "Unable to delete flight."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		results, err := getAllFlights()
		if err != nil {
			fmt.Println(err)
			returnMsg := mainResult{Code: 8, Payload: nil, Message: "Unable to refresh data."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		returnMsg := mainResult{Code: 0, Payload: results, Message: "Successfully added flight."}
		json.NewEncoder(w).Encode(returnMsg)
	} else {
		returnMsg := mainResult{Code: 5, Payload: nil, Message: "Invalid Access"}
		json.NewEncoder(w).Encode(returnMsg)
	}
}

// Description : Handles web request for /
func showAdmin(w http.ResponseWriter, r *http.Request) {
	Data := pageSettings{"isAdmin": true, "isBooking": false, "isBookNow": false}
	err := gtl.ExecuteTemplate(w, "index.gtl", Data)
	if err != nil {
		log.Fatal(err)
	}
}

// Description : Handles web request for booking
func showBooking(w http.ResponseWriter, r *http.Request) {
	Data := pageSettings{"isAdmin": false, "isBooking": true, "isBookNow": false}
	err := gtl.ExecuteTemplate(w, "index.gtl", Data)
	if err != nil {
		log.Fatal(err)
	}
}

// Description : Handles web request for start booking
func startBooking(w http.ResponseWriter, r *http.Request) {
	if r.Method == POST {
		fmt.Println(r.FormValue("first_name"))
		ID, _ := strconv.Atoi(r.FormValue("selected_flight"))
		fmt.Println("::::::::::>>>>>>>>>> ", ID)
		seatsrow, rows, aorder, seats, names, err := getSeatDimensions(ID)
		if err != nil {
			fmt.Println(err)
			returnMsg := mainResult{Code: 8, Payload: nil, Message: "Unable to get dimentions"}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		ClientID, ClientName, Result := addNewClient(r.FormValue("first_name"))

		if !(reflect.DeepEqual(Result, mainResult{})) {
			json.NewEncoder(w).Encode(Result)
			return
		}

		Data := pageSettings{
			"isAdmin":         false,
			"isBooking":       false,
			"isBookNow":       true,
			"seatsRow":        seatsrow,
			"rows":            rows,
			"assignmentOrder": aorder,
			"seatIndexes":     seats,
			"names":           names,
			"FlightID":        ID,
			"ClientID":        ClientID,
			"ClientName":      ClientName,
		}
		err = gtl.ExecuteTemplate(w, "booking.gtl", Data)
		if err != nil {
			returnMsg := mainResult{Code: 9, Payload: nil, Message: "Unable to show booking page"}
			json.NewEncoder(w).Encode(returnMsg)
		}
	} else {
		returnMsg := mainResult{Code: 5, Payload: nil, Message: "Invalid Access"}
		json.NewEncoder(w).Encode(returnMsg)
	}
}

// bookFlight Update database of flight booking
func bookFlight(w http.ResponseWriter, r *http.Request) {
	if r.Method == POST {
		ID := r.FormValue("id")
		Seats := r.FormValue("seats")
		Aorder := r.FormValue("aorder")

		stmtIns, err := db.Prepare("UPDATE planes SET aorder = ?, seats = ? WHERE id = ?") // ? = placeholder
		defer stmtIns.Close()
		if err != nil {
			returnMsg := mainResult{Code: 12, Payload: nil, Message: "Unable to prepare update flight query."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		_, err = stmtIns.Exec(Aorder, Seats, ID)
		if err != nil {
			returnMsg := mainResult{Code: 13, Payload: nil, Message: "Unable to update flight booking."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		returnMsg := mainResult{Code: 14, Payload: nil, Message: "Successfully booked a flight"}
		json.NewEncoder(w).Encode(returnMsg)
	} else {
		returnMsg := mainResult{Code: 5, Payload: nil, Message: "Invalid Access"}
		json.NewEncoder(w).Encode(returnMsg)
	}
}

// showBookingList show list of boookings
func showBookingList(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {

		results, err := getAllFlights()
		if err != nil {
			fmt.Println(err)
			returnMsg := mainResult{Code: 4, Payload: nil, Message: "Unable to refresh data."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		Data := pageSettings{"isAdmin": false, "isBooking": false, "isBookNow": false, "isBookingList": true, "flights": results}
		err = gtl.ExecuteTemplate(w, "bookinglist.gtl", Data)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		returnMsg := mainResult{Code: 5, Payload: nil, Message: "Invalid Access"}
		json.NewEncoder(w).Encode(returnMsg)
	}
}

// getBookingList returns a list of bookings per flight in json format
func getBookingList(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		flightID := r.FormValue("flightid")
		bookings, err := getBookings(flightID)

		if err != nil {
			fmt.Println(err.Error())
			returnMsg := mainResult{Code: 15, Payload: nil, Message: "Unable to query bookings."}
			json.NewEncoder(w).Encode(returnMsg)
			return
		}

		returnMsg := result{"Code": 0, "Payload": bookings, "Message": "Success query bookings"}
		json.NewEncoder(w).Encode(returnMsg)
	} else {
		returnMsg := mainResult{Code: 5, Payload: nil, Message: "Invalid Access"}
		json.NewEncoder(w).Encode(returnMsg)
	}
}
