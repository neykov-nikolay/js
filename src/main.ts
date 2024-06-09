import nodeFetch from "node-fetch";

const BOOKS_API_URL = "http://localhost:3000/books";

interface Book {
  id: string;
  title: string;
  isbn: string;
  pageCount: number;
  authors: string[];
}

const fetch = async (url: string) => {
  const response = await nodeFetch(url);

  return await response.json();
};

const getBookTitles = async () => {
  const fetchedBooks: Book[] = await fetch(BOOKS_API_URL);
  // const booksTitles = fetchedBooks.map((book) => book.title);
  //*
  // const booksTitlesCollection: string[] = [];

  // for (const book of fetchedBooks) {
  //   booksTitlesCollection.push(book.title);
  // }

  // console.log(booksTitlesCollection);

  //*
  const booksTitles = fetchedBooks.reduce((booksCollection, currentBook) => {
    booksCollection.push(currentBook.title);
    return booksCollection;
  }, []);

  // console.log(booksTitles);
};

// Task 01
getBookTitles();
// ["Unlocking Android", "Android in Action, Second Edition", "Specification by Example", "Flex 3 in Action", "Flex 4 in Action", "Collective Intelligence in Action", "Zend Framework in Action", "Flex on Java", "Griffon in Action", "OSGi in Depth", "Flexible Rails", "Hello! Flex 4", "Coffeehouse", "Team Foundation Server 2008 in Action", "Brownfield Application Development in .NET", "MongoDB in Action", "Distributed Application Development with PowerBuilder 6.0", "Jaguar Development with PowerBuilder 7", "Taming Jaguar", "3D User Interfaces with Java 3D", "Hibernate in Action", "Hibernate in Action (Chinese Edition)", "Java Persistence with Hibernate", "JSTL in Action", "iBATIS in Action", "Designing Hard Software", "Hibernate Search in Action", "jQuery in Action", "jQuery in Action, Second Edition", "Building Secure and Reliable Network Applications", "Ruby for Rails", "The Well-Grounded Rubyist", "Website Owner's Manual", "ASP.NET 4.0 in Practice", "Hello! Python", "PFC Programmer's Reference Manual", "Graphics File Formats", "Visual Object Oriented Programming", "iOS in Practice", "iPhone in Action", "Silverlight 2 in Action", "The Quick Python Book, Second Edition", "Internet and Intranet Applications with PowerBuilder 6", "Practical Methods for Your Year 2000 Problem", "Mobile Agents", "Spring Dynamic Modules in Action", "SQL Server 2008 Administration in Action", "Android in Practice", "Object Oriented Perl", "GWT in Practice", "Ajax in Action", "Ajax in Practice", "Prototype and Scriptaculous in Action", "POJOs in Action", "Data Munging with Perl", "Hello! HTML5 & CSS3", "Seam in Action", "Wicket in Action", "Open Source SOA", "Struts 2 in Action", "Essential Guide to Peoplesoft Development and Customization", ".NET Multithreading", "SCWCD Exam Study Kit Second Edition", "Spring Roo in Action", "SOA Governance in Action", "RSS and Atom in Action", "LDAP Programming, Management and Integration", "Mule in Action", "Java Foundation Classes", "Managing Components with Modeler", "Command-line Processing with CLI", "Understanding and Using Chain", "Working with the Logging and Discovery Components", "Uploading files with FileUpload", "Handling Protocols with the Net Component", "XML Parsing with Digester", "JXPath and Betwixt: Working with XML", "Validating Data with Validator", "Enhancing Java Core Libraries with Collections", "Enhancing Java Core Libraries with BeanUtils and Lang"]

// Task 02
const getUniqueAuthors = async () => {
  const fetchedBooks = await fetch(BOOKS_API_URL);
  const allAuthors: string[] = fetchedBooks.reduce((authors, currentBook) => {
    //!
    authors.push(...currentBook.authors);

    return authors;
  }, []);

  const uniqueAuthors = new Set(allAuthors);
  // console.log(uniqueAuthors);
};

getUniqueAuthors();
// ["W. Frank Ableson","Charlie Collins","Robi Sen","Gojko Adzic","Tariq Ahmed with Jon Hirschi","Faisal Abid","Tariq Ahmed","Dan Orlando","John C. Bland II","Joel Hooks","Satnam Alag","Rob Allen","Nick Lo","Steven Brown","Bernerd Allmon","Jeremy Anderson","Andres Almiray","Danno Ferrin","","James Shingler","Alexandre de Castro Alves","Peter Armstrong","Levi Asher","Christian Crumlish","Jamil Azher","Kyle Baley","Donald Belcham","Kyle Banker","Michael J. Barlotta","Michael Barlotta","Jason R. Weiss","Jon Barrilleaux","Christian Bauer","Gavin King","Shawn Bayern","Clinton Begin","Brandon Goodin","Larry Meadors","Douglas W. Bennett","Emmanuel Bernard","John Griffin","Bear Bibeault","Yehuda Katz","Kenneth P. Birman","David A. Black","Paul A. Boag","Daniele Bochicchio","Stefano Mostarda","Marco De Sanctis","Anthony Briggs","Richard Brooks","C. Wayne Brown","Barry J. Shepherd","Margaret M. Burnett","Adele Goldberg","Ted G. Lewis","Bear P. Cahill","Christopher Allen","Shannon Appelcline","Chad A. Campbell","John Stockton","Naomi R. Ceder","Tom Cervenka","Robert Chapman","William R. Cockayne and Michael Zyda","editors","Arnaud Cogoluegnes","Thierry Templier","Andy Piper","Rod Colledge","Michael D. Galpin","Matthias Kaeppler","Damian Conway","Robert Cooper","Charles Collins","Dave Crane","Eric Pascarello with Darren James","Jord Sonneveld and Bear Bibeault with Ted Goddard","Chris Gray","Ram Venkataraman","Joe Walker","Bear Bibeault with Tom Locke","Chris Richardson","David Cross","Rob Crowther","Dan Allen","Martijn Dashorst","Eelco Hillenius","Jeff Davis","Donald Brown","Chad Michael Davis","Scott Stanlick","Tony DeLia","Galina Landres","Isidor Rivera","Prakash Sankaran","Alan Dennis","Hanumant Deshmukh","Jignesh Malavia","Matthew Scarpino","Ken Rimple","Srini Penchikala","Jos Dirksen","Dave Johnson","Clayton Donley","David Dossot","John D'Emic","Stephen C. Drye","William C. Wake","Vikram Goyal"]

// Task 03
const getBookTitlesByAuthor = async (author: string) => {
  const fetchedBooks = await fetch(BOOKS_API_URL);
  const booksByAuthorTitle: string[] = fetchedBooks.reduce((bookTitles, currentBook: Book) => {
    // const isAuthorOfTheBook = currentBook.authors.some((name) => name === author);
    if (currentBook.authors.includes(author)) {
      bookTitles.push(currentBook.title);
    }

    return bookTitles;
  }, []);

  console.log(booksByAuthorTitle);
};

getBookTitlesByAuthor("W. Frank Ableson");
// ["Unlocking Android","Android in Action, Second Edition"]

getBookTitlesByAuthor("Dan Orlando");
// ["Flex 4 in Action"]

getBookTitlesByAuthor("Vikram Goyal");
// ["Managing Components with Modeler","Command-line Processing with CLI","Understanding and Using Chain","Working with the Logging and Discovery Components","Uploading files with FileUpload","Handling Protocols with the Net Component","XML Parsing with Digester","JXPath and Betwixt: Working with XML","Validating Data with Validator","Enhancing Java Core Libraries with Collections","Enhancing Java Core Libraries with BeanUtils and Lang"]
