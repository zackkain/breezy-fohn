package main

import (
    "net/http"
)

func init() {
    fs := http.FileServer(http.Dir("./tmpl"))
    http.Handle("/", fs)
    http.HandleFunc("/bin/", staticHandler)
    http.HandleFunc("/src/", staticHandler)
    http.HandleFunc("/node_modules/", staticHandler)
}

func staticHandler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, r.URL.Path[1:])
}
