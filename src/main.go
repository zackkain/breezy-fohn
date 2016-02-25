package main

import (
    "net/http"
)

func init() {
    http.Handle("/", http.FileServer(http.Dir("./tmpl")))
    http.HandleFunc("/bin/", staticHandler)
    http.HandleFunc("/src/", staticHandler)
    http.HandleFunc("/node_modules/", staticHandler)
}

func staticHandler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, r.URL.Path[1:])
}
