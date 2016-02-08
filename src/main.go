package main

import (
    "net/http"
)

func init() {
    http.Handle("/", http.FileServer(http.Dir("./tmpl")))
    http.HandleFunc("/bin/", binHandler)
    http.HandleFunc("/node_modules/", binHandler)
}

func binHandler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, r.URL.Path[1:])
}
