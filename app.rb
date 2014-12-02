require_relative "helpers"

get "/" do
  @items = [
    { name: "Ruby", 
      type: "Logic", 
      description: "Ruby is a programming language."},
    { name: "PHP", 
      type: "Logic", 
      description: "PHP is a programming language."},
    { name: "Python", 
      type: "Logic", 
      description: "Python is a programming language."},
    { name: "C++", 
      type: "Logic", 
      description: "C++ is a programming language."},
    { name: "CSS", 
      type: "Style", 
      description: "CSS makes web pages to look nicer. It is used for styling web pages"},
    { name: "HTML", 
      type: "Style", 
      description: "HTML defines the structure of the web page."},
    { name: "HAML", 
      type: "Style", 
      description: "HAML is an interpretter for HTML."},
    { name: "SASS", 
      type: "Style", 
      description: "SASS is an advanced CSS."},
    { name: "ERB", 
      type: "Style", 
      description: "ERB or 'Embeded Ruby' ERB is a convenient practice of embedding Ruby inside a front-end code document like HTML."},
    { name: "Apache", 
      type: "Infrastructure", 
      description: "Apache serves the web pages."},
    { name: "nginx", 
      type: "Infrastructure", 
      description: "nginx serves the web pages."},
    { name: "Linux", 
      type: "Infrastructure", 
      description: "Linux is an open source operating system used by millions to host web sites."},
    { name: "MySQL", 
      type: "Storage", 
      description: "MySQL is used for saving information in relational databse tables."},
    { name: "SQLite", 
      type: "Storage", 
      description: "SQLite is used for saving information in relational databse tables."},
    { name: "MongoDB", 
      type: "Storage", 
      description: "MongoDB is used for saving information in files."},
    { name: "PostgreSQL", 
      type: "Storage", 
      description: "PostgreSQL is a relational database system used for saving files."}
  ]


  @items = @items.shuffle

  haml :"bentobox"
end
