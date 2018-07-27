package main

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/twinj/uuid"
)

// Description : Generates new GUID
func generateUUID() uuid.Uuid {
	id := uuid.NewV4()

	return id
}

// getAllFlights function to query all flights from the database
func getAllFlights() ([]result, error) {
	var query = `SELECT id, `
	query = query + `plane, `
	query = query + `departure, `
	query = query + `arrival, `
	query = query + `origin, `
	query = query + `destination `
	query = query + `FROM planes `

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var emailRecords []result

	for rows.Next() {
		var record result
		var val1 int
		var val2 string
		var val3 string
		var val4 string
		var val5 string
		var val6 string

		err = rows.Scan(
			&val1,
			&val2,
			&val3,
			&val4,
			&val5,
			&val6,
		)

		record = result{"ID": val1, "Name": val2, "Depart": val3, "Arrive": val4, "Orig": val5, "Dest": val6}

		if err != nil {
			return nil, err
		}

		emailRecords = append(emailRecords, record)
	}

	return emailRecords, nil
}

// Get dimensions for the seats
func getSeatDimensions(ID int) (int, int, string, string, []result, error) {
	var seatsrow int
	var rows int
	var aorder string
	var seats string

	query := "SELECT seatsrow, rows, aorder, seats FROM planes WHERE id = ?"
	err := db.QueryRow(query, ID).Scan(&seatsrow, &rows, &aorder, &seats)
	if err != nil { // Record does not exist
		return 0, 0, "", "", nil, err
	}

	query = "SELECT id,name FROM clients WHERE id IN (" + seats + ")"
	dbRows, err := db.Query(query)
	if err != nil {
		return 0, 0, "", "", nil, err
	}
	defer dbRows.Close()

	var names []result

	for dbRows.Next() {
		var val1 int
		var val2 string

		err = dbRows.Scan(&val1, &val2)
		if err != nil {
			return 0, 0, "", "", nil, err
		}

		finalResult := result{"ID": val1, "Name": val2, "Index": 0}

		names = append(names, finalResult)
	}

	seatsIndexes := strings.Split(seats, ",")

	for i := 0; i < len(seatsIndexes); i++ {
		for j := 0; j < len(names); j++ {
			x, _ := strconv.Atoi(seatsIndexes[i])
			if x == names[j]["ID"] {
				fmt.Println("}}}} ", names[j]["ID"])
				names[j]["Index"] = i
			}
		}
	}

	return seatsrow, rows, aorder, seats, names, nil // Record exist and return true
}

// addNewClient adds new client to the database
func addNewClient(name string) (int, string, mainResult) {
	NewGUID := generateUUID()

	stmtIns, err := db.Prepare("INSERT INTO clients(name,code) VALUES(?,?)") // ? = placeholder
	if err != nil {
		returnMsg := mainResult{Code: 10, Payload: nil, Message: "Unable to add new client."}
		return 0, "", returnMsg
	}
	defer stmtIns.Close()

	_, err = stmtIns.Exec(name, NewGUID.String())
	if err != nil {
		returnMsg := mainResult{Code: 11, Payload: nil, Message: "Unable to add new client."}
		return 0, "", returnMsg
	}

	var ID int
	var Name string

	query := "SELECT id, name FROM clients WHERE code = ?"
	err = db.QueryRow(query, NewGUID.String()).Scan(&ID, &Name)
	if err != nil { // Record does not exist
		returnMsg := mainResult{Code: 12, Payload: nil, Message: "Unable to get client id."}
		return 0, "", returnMsg
	}

	return ID, Name, mainResult{}
}

// getBookings get all bookings for a specific flight
func getBookings(ID string) (result, error) {

	var name string
	var aorder string
	var seats string
	var departure string
	var arrival string
	var origin string
	var destination string
	var seatsrow int
	var rows int

	query := "SELECT plane, aorder, seats, seatsrow, rows, departure, arrival, origin, destination FROM planes WHERE id = ?"
	err := db.QueryRow(query, ID).Scan(&name, &aorder, &seats, &seatsrow, &rows, &departure, &arrival, &origin, &destination)
	if err != nil { // Record does not exist
		return nil, err
	}

	query = "SELECT id,name FROM clients WHERE id IN (" + seats + ")"
	dbRows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer dbRows.Close()

	var finalResult []result

	for dbRows.Next() {
		var ClientID int
		var ClientName string

		err = dbRows.Scan(&ClientID, &ClientName)
		if err != nil {
			return nil, err
		}

		/// -=-=-=-=
		tmpResult := result{
			"Index": 0,
			"ID":    ClientID,
			"Name":  ClientName,
		}

		finalResult = append(finalResult, tmpResult)
	}

	returnResult := result{
		"Flight":      name,
		"Origin":      origin,
		"Destination": destination,
		"Departure":   departure,
		"Arrival":     arrival,
		"Seats":       seats,
		"Order":       aorder,
		"Seatsrow":    seatsrow,
		"Rows":        rows,
		"Bookings":    finalResult,
	}

	return returnResult, nil
}
