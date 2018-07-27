package main

import (
	"database/sql"
	"html/template"
)

// Copied from db.go
const (
	// DBUser MySQL database username
	DBUser = "root" //"test" //
	// DBPassword MySQL database password
	DBPassword = "" //"test" //
	// DBName database name
	DBName = "planeseat"
	// DBHost MySQL host server
	DBHost = "127.0.0.1"
	// DBPort MySQL port
	DBPort = "3306" //"8889" //
	// APIPort endpoint port
	APIPort = "9393"
)

var gtl *template.Template
var serverConfig Config

// db object for managing database queries
var db *sql.DB

var functionMap = template.FuncMap{
	"header": loadTemplate,
	"footer": loadTemplate,
}

const (
	//CONFIGFILE - Config file name
	CONFIGFILE = "actelligent.config"

	// POST Method
	POST = "POST"
)

//Config json structure for config file
type Config struct {
	Host   string `json:"localhost"`
	Port   string `json:"port"`
	Htdocs string `json:"htdocs"`
	Env    string `json:"env"`
}

// Results and message map
type pageSettings map[string]interface{}

type result map[string]interface{}

type mainResult struct {
	Code    int      `json:"Code"`
	Payload []result `json:"Payload"`
	Message string   `json:"Message"`
}

type seats []int
