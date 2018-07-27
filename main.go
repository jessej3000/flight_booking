package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

// Description : Main init function
func init() {
	// Initialize templates
	var err error
	serverConfig, err = loadConfiguration(CONFIGFILE)
	if err != nil {
		log.Fatal(err)
	}

	gtl = template.Must(template.New("").Funcs(functionMap).ParseGlob(serverConfig.Htdocs + "/env/" + serverConfig.Env + "/*.gtl"))

	// Initialize database
	db, err = sql.Open("mysql", DBUser+":"+DBPassword+"@tcp("+DBHost+":"+DBPort+")/"+DBName)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err.Error())
	}
}

// Description : Load template file with file name (filename)
func loadTemplate(filename string) string {
	content, err := ioutil.ReadFile(serverConfig.Htdocs + "/env/" + serverConfig.Env + "/" + filename)
	if err != nil {
		log.Fatal(err)
	}

	return string(content)
}

// Description : Loads configuration file into Config Struct
func loadConfiguration(filename string) (Config, error) {
	var config Config
	configFile, err := os.Open(filename)
	defer configFile.Close()
	if err != nil {
		return config, err
	}

	jsonParser := json.NewDecoder(configFile)
	err = jsonParser.Decode(&config)
	return config, err
}

func main() {
	fmt.Println("Running actelligent on port ", APIPort)
	//router := mux.NewRouter()

	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir(serverConfig.Htdocs+"/env/"+serverConfig.Env+"/images"))))
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir(serverConfig.Htdocs+"/env/"+serverConfig.Env+"/css"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir(serverConfig.Htdocs+"/env/"+serverConfig.Env+"/js"))))

	http.HandleFunc("/seats/{id}", getSeats)    //.Methods("GET")
	http.HandleFunc("/addflight/", addFlight)   //.Methods("POST")
	http.HandleFunc("/getflights/", getFlights) //.Methods("POST")

	http.HandleFunc("/deleteflight/", deleteFlight) //.Methods("POST")
	http.HandleFunc("/bookflight/", bookFlight)     //.Methods("POST")

	http.HandleFunc("/admin/", showAdmin)                //.Methods("GET")
	http.HandleFunc("/booking/", showBooking)            //.Methods("GET")
	http.HandleFunc("/book/", startBooking)              //.Methods("GET")
	http.HandleFunc("/bookinglist/", showBookingList)    //.Methods("GET")
	http.HandleFunc("/getbookingslist/", getBookingList) //.Methods("GET")

	log.Fatal(http.ListenAndServe(":"+APIPort, nil))
}
