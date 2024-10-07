const cardArr = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image:
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
            "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image:
            "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        rating: {
            rate: 2.1,
            count: 430,
        },
    },
    {
        id: 5,
        title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image:
            "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
        rating: {
            rate: 4.6,
            count: 400,
        },
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image:
            "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        rating: {
            rate: 3.9,
            count: 70,
        },
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s",
        rating: {
            rate: 3,
            count: 400,
        },
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJKncgYFP-O8CwJz4o989Jx1TzcWf82CkRw&s",
        rating: {
            rate: 1.9,
            count: 100,
        },
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s",
        rating: {
            rate: 3.3,
            count: 203,
        },
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image:
            "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728086400&semt=ais_hybrid",
        rating: {
            rate: 2.9,
            count: 470,
        },
    },
];

const card = cardArr.map((e) => {
    
    var card1 = document.getElementById("root")
    var card_div = document.createElement("div")
    var image = document.createElement("img")
    var h3 = document.createElement("h3")
    var pera_div = document.createElement("div")
    var peraH = document.createElement("p")
    var h6 = document.createElement("h6")
    var star_div = document.createElement("div")
    var star = document.createElement("ul")
    var sold_item = document.createElement("h6")
    var button = document.createElement("button")

    
    var shoesheading = document.createTextNode(e.category)
    var pera = document.createTextNode(e.title)
    var shoes_RS = document.createTextNode("Rs " + e.price)
    var sold_text =document.createTextNode(e.rating.count + " sold |")
    var star_in1 = document.createElement("li")
    var star_in2 = document.createElement("li")
    var star_in3 = document.createElement("li")
    var star_in4 = document.createElement("li")
    var star_in5 = document.createElement("li")
    var buttontext = document.createTextNode("Buy Now")
    
    star_div.appendChild(sold_item)
    image.setAttribute("src", e.image)
    peraH.appendChild(pera)
    sold_item.appendChild(sold_text)
    h3.appendChild(shoesheading)
    h6.appendChild(shoes_RS)
    star.appendChild(star_in1)
    star.appendChild(star_in2)
    star.appendChild(star_in3)
    star.appendChild(star_in4)
    star.appendChild(star_in5)
    button.appendChild(buttontext)
    

    star_in1.setAttribute("class", "fa-solid fa-star ok")
    star_in2.setAttribute("class", "fa-solid fa-star ok")
    star_in3.setAttribute("class", "fa-solid fa-star ok")
    star_in4.setAttribute("class", "fa-solid fa-star ok")
    star_in5.setAttribute("class", "fa-solid fa-star ok")
    card_div.setAttribute("class", "sabCard")
    image.setAttribute("class", "image")
    h3.setAttribute("class", "h3")
    peraH.setAttribute("class", "peragrave")
    h6.setAttribute("class", "h6")
    star.setAttribute("class", "ul")
    star_div.setAttribute("class","rating_sold")
    button.setAttribute("class", "button")
    pera_div.setAttribute("class","peraDiv")
    sold_item.setAttribute("class","sold_item")

    if(e.rating.rate <= 2){
        star_in1.classList.add("fa")
        star_in2.classList.remove("fa")
        star_in3.classList.remove("fa")
        star_in4.classList.remove("fa")
        star_in5.classList.remove("fa")
    }else if(e.rating.rate <= 3){
        star_in1.classList.add("fa")
        star_in2.classList.add("fa")
        star_in3.classList.remove("fa")
        star_in4.classList.remove("fa")
        star_in5.classList.remove("fa")
        console.log("2 ha na")
    }else if(e.rating.rate <= 4){
        star_in1.classList.add("fa")
        star_in2.classList.add("fa")
        star_in3.classList.add("fa")
        star_in4.classList.remove("fa")
        star_in5.classList.remove("fa")
        console.log("3 ha na")
    }else if(e.rating.rate <= 5){
        star_in1.classList.add("fa")
        star_in2.classList.add("fa")
        star_in3.classList.add("fa")
        star_in4.classList.add("fa")
        star_in5.classList.remove("fa")
        console.log("4 jww")
    }else if(e.rating.rate = 5){
        star_in1.classList.add("fa")
        star_in2.classList.add("fa")
        star_in3.classList.add("fa")
        star_in4.classList.add("fa")
        star_in5.classList.add("fa")
        console.log("5 jwjwj")
    }


    card1.appendChild(card_div)
    card_div.appendChild(image)
    card_div.appendChild(h3)
    pera_div.appendChild(peraH)
    card_div.appendChild(pera_div)
    card_div.appendChild(h6)
    card_div.appendChild(star_div)
    card_div.appendChild(button)
    star_div.appendChild(star)


})


//
//
//
//
//

//
//
//
//
//


//
//
//



//
//
//
//
//
//

//
//
//
//
//
// 