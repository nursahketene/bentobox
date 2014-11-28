require_relative "helpers"

get "/" do
  @items = [
    {name: "Ruby", type: "Logic", description: "Ruby is a programming language"},
    {name: "PHP", type: "Logic", description: "PHP is a programming language"},
    {name: "Python", type: "Logic", description: "Python is a programming language"},
    {name: "C++", type: "Logic", description: "C++ is a programming language"},
    {name: "CSS", type: "Style", description: "CSS makes web pages to look nicer"},
    {name: "HTML", type: "Style", description: "HTML defines the structure of the web page"},
    {name: "HAML", type: "Style", description: "HAML is an interpretter for HTML"},
    {name: "SASS", type: "Style", description: "SASS is an advanced CSS"},
    {name: "Apache", type: "Infrastructure", description: "Apache serves the web pages"},
    {name: "nginx", type: "Infrastructure", description: "nginx serves the web pages"},
    {name: "Linux", type: "Infrastructure", description: "Linux is an open source openrating system used by millions to host web sites"},
    {name: "MySQL", type: "Storage", description: "MySQL is used for saving information in relational databse tables"},
    {name: "SQLite", type: "Storage", description: "SQLite is used for saving information in relational databse tables"},
    {name: "MongoDB", type: "Storage", description: "MongoDB is used for saving information in files"}
  ]


  @items = @items.shuffle

  haml :"bentobox"
end
