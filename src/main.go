package main

import (
    "net/http"
    "html/template"
)

func init() {
    http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
    t := template.New("Index")
    t, _ = t.ParseFiles("tmpl/index.html")
    t.Execute(w, nil)
}
