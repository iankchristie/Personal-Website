var tabs = [];
// Home
tabs["Home"] = {
    "heading": "About",
    "image": "Images/Headshot.jpg",
    "description": ["I grew up in Houston, Texas. I went to school in Boston, Massachussetts studying Computer Science and Neuroscience. Now I live in San Francisco working at Google under YouTube Mobile Architecture. In my spare time I run, bike, and rock climb. I want to learn everything."]
};
// Contact
tabs["Contact"] = {
    "heading": "Contact",
    "image": "Images/Contact.png",
    "description": ["<a target=\"blank\" href=\"mailto:iankchristie@gmail.com\">email: iankchristie@gmail.com</a>",
        "<a target=\"blank\" href=\"https://www.facebook.com/iankchristie\">Facebook: iankchristie</a>",
        "<a target=\"blank\" href=\"https://www.linkedin.com/in/iankchristie/\">Linkedin: iankchristie</a>",
        "<a target=\"blank\" href=\"https://www.github.com/iankchristie\">Github: iankchristie</a>",
        "<a target=\"blank\" href=\"Resume.pdf\">Resume</a>"
    ]
};
// Professional
tabs["Professional"] = {
    "heading": "Professional",
    "image": "Images/Professional.JPG",
    "description": ["I'm really good at: data structures, algorithms, data analysis, computer vision, android dev, iOS dev, and communicating.<br/>",
        "I'm really interested in learning more about: web dev, networking, AI, hardware & architecture, natural language processing, security & cryptography, multiprocessing, distributed systems, graphics, robotics, computational geometry, compilers, computer syntax & language structure, quantum computing theory, fixing my collar in photos, neuromorphic software, Global Positioning Systems, compression, everything."
    ],
};
// Google
tabs["Google"] = {
    "heading": "Google",
    "image": "https://maxcdn.icons8.com/Share/icon/Logos//google_logo1600.png",
    "description": ["I joined Google September 2016 in a 1 year rotational program called an Engineering Residency so I could make a smooth transition from academia to industry.<br/>",
        "I've found that I thrive in an environment with smart peers and difficult challenges to work on."
    ]
};
// Chrome
tabs["Chrome"] = {
    "heading": "Chrome",
    "image": "Images/Chrome.png",
    "description": ["The Chrome browser was amazing to work on! It was my first experience working on a <i>civilization sized</i> product and the engineering on the team is phenomenal. I worked on an experimental project called <b>The Physical Web</b>, which was a way to introduce the <b>Internet Of Things</b> into Chrome. I worked on the Chrome for Android."
    ]
};
// FatBeacon
tabs["FatBeacon"] = {
    "heading": "FatBeacon",
    "image": "Images/RaspberryPi3.jpg",
    "description": ["Prototyped and optimized peer-to-peer webpage transfer over BLE from Raspberry Pi 3 to Android. Achieved a transfer rate of 32.8 KB/s (7.5x faster than previous attempts)."]
};
// Sharing
tabs["Sharing"] = {
    "heading": "Physical Web Sharing",
    "image": "Images/Android.png",
    "description": ["Developed a feature in Chrome to wirelessly share links over BLE with nearby Android users."]
};
// ShareSheet
tabs["ShareSheet"] = {
    "heading": "Share Sheet",
    "image": "Images/ShareSheet.png",
    "description": ["I refactored Chrome share sheet to allow for easy inclusion of generic components with intent filters."]
};
// PrototypeApp
tabs["PrototypeApp"] = {
    "heading": "Physical Web Prototype App",
    "image": "Images/Prototype.png",
    "description": ["I enhanced UX of Physical Web prototype app by moving work off of main thread to reduce dropped frames.<br/>",
      "Also I designed and implemented a new settings page for the app that was more user friendly and intuitive."]
};
// YouTube
tabs["YouTube"] = {
    "heading": "YouTube",
    "image": "Images/YouTube.png",
    "description": ["I'm currently on the YouTube team and loving it! I work on Client Infractructure under Mobile Architecture and specifically Offline Services on iOS (it's a mouthful)."]
};
// Interleaving
tabs["Interleaving"] = {
    "heading": "Offline Interleaving",
    "image": "Images/Interleaving.png",
    "description": ["Completed end-to-end intelligent playlist sync strategy to ensure that Youtube Red and emerging market users consistently have access to offline content. Project included designing, implementing, test planning, A/B experimentation on release, and analysis."]
};
// Migration
tabs["Migration"] = {
    "heading": "Dependency Injection Framework Migration",
    "image": "Images/Dependency.png",
    "description": ["Migrated iOS client infrastucture dependency injection framework between two proprietary technologies. It was in a half-assed state for a long time and colleagues were very appreciative I took the time to work on it."]
};
// LightweightData
tabs["LightweightData"] = {
    "heading": "Lightweight CoreData Migration Analysis",
    "image": "Images/iOS.jpg",
    "description": ["Analyzed Lightweight CoreData migration and its effect on application startup time."]
};
// GoldmanSachs
tabs["GoldmanSachs"] = {
    "heading": "Goldman Sachs",
    "image": "Images/WallStreet.jpg",
    "description": ["I love to learn and experience new things. In 2015 I was certain that I was going to go into science or tech as a career so I wanted to do something different with my summer. I chose to intern at the investment bank Goldman Sachs to get a glimpse into the world of finance.<br/>",
        "While there I worked as a software developer and analyst working on a web application designed to visually query their massive and distributed databases. I worked in HTML, CSS, Javascript, AngularJS, and a proprietary functional back-end language that was really fun!<br/>",
        "It was my first experience software engineering and I learned a lot of new technologies, concepts, and patterns. But my biggest learning was about the banking system, the culture of NYC, and what drives human progress."
    ]
};
// BrandeisUniversity
tabs["BrandeisUniversity"] = {
    "heading": "Brandeis University",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Brandeis_University_seal.svg/480px-Brandeis_University_seal.svg.png",
    "description": ["I went to Brandeis University and double majored in Computer Science and Neuroscience.<br/>",
        "Much of my focus was on how computing can help the field of neuroscience rather than neuroscience applications in computing.<br/>",
        "Through computational modeling I discovered the joys of developing, which has lead my on my current software engineering path.<br/>"
    ]
};
// Neuroscience
tabs["Neuroscience"] = {
    "heading": "Neuroscience",
    "image": "Images/Neuroscience.png",
    "description": ["Starting February 14th of my freshman year I started working in Dr. Stephen Van Hooser's Neuroscience Laboratory. " +
      "The work is to understand how neuronal circuits develop as a function of experience. I worked as a computational modeler.<br/>",
      "“How can a three-pound mass of jelly that you can hold in your palm imagine angels, contemplate the meaning of infinity, " +
      "and even question its own place in the cosmos? Especially awe inspiring is the fact that any single brain, including yours, is made up of " +
      "atoms that were forged in the hearts of countless, far-flung stars billions of years ago. These particles drifted for eons and light-years " +
      "until gravity and change brought them together here, now. These atoms now form a conglomerate- your brain- that can not only ponder the very " +
      "stars that gave it birth but can also think about its own ability to think and wonder about its own ability to wonder. With the arrival of " +
      "humans, it has been said, the universe has suddenly become conscious of itself. This, truly, it the greatest mystery of all.”",
      "― V.S. Ramachandran",]
};
// FirstModel
tabs["FirstModel"] = {
    "heading": "First Model",
    "image": "Images/M1.jpg",
    "description": ["My first project was to increase the speed of simulations for a computational model introduced in this <a target=\"blank\" href=\"http://jn.physiology.org/content/111/11/2355.long\">paper</a>.<br/>",
      "At that time simulations for the model were taking 3 days to complete. We understood that he basic problem was that Matlab was not designed for speed, so our solution was to run the simulations in C++ instead.<br/>",
      "The design for the solution included a parser to convert the Matlab model representation into C++. C++ classes to represent components of the model. " +
      "A C++ simulation environment that used Eulers Method to approximate differential equations. A Matlab script to visualize CSV data.<br/>",
      "We were able to increase the speed of simulations by 10x! Source code can be seen at my Github here TODO"]
};
// JavaApplet
tabs["JavaApplet"] = {
    "heading": "JavaApplet",
    "image": "Images/SimBrain.png",
    "description": ["While I was doing a lot of modeling I came across two problems:",
      "<ul><li>It was time consuming and error prone to create models via code.</li>" +
      "<li>It was difficult to communicate how models worked.</li></ul>",
      "The solution to this was a graphical model creation and visualization tool. It was a Java Applet that used drag-and-drop design to create the model in a 2D space and third-party libraries to visualize output of simulations.<br/>",
      "It was used in my lab and as teaching tool in some classes for visualizing neuronal networks. Source code can be seen at my Github here TODO."]
};
// Research
tabs["Research"] = {
    "heading": "Research",
    "image": "Images/M2.png",
    "description": ["Starting junior year I started my own computational neuroscience research funded my an NIH grant. The goal of the project was to understand how a type of visual selectivity, called Direction Selectivity, developed. And whether that development could take place entirely within the cortex, or if it had to rely on plasticity upstream in the brain.<br/>",
      "We created a generalizable model of a neuronal circuit that would take realistic input and output a firing rate. The firing rates of the system could be categorized. So each model could be thought of as an n-dimensional point in space where each dimension was a parameter to the model and that point could be classified.",
      "So we scanned and classified the parameter space using Brandeis's Computational Cluster. Then we determined plasticity rules that would allow the model to go from one point in space to another simulating training experience.<br/>",
      "We found two models that fit biological data and made measurable predictions. Wet lab analysis is verifying those models currently.<br/>",
      "The research was used as my senior thesis and was awared <b>Highest Honors</b> and <b>The Division of Science Award for Outstanding Scientific Research</b>. The research was published by the Journal of Neuroscience <a target=\"blank\" href=\"https://www.ncbi.nlm.nih.gov/pubmed/28515285\">here</a>. Source code can be found at my Github <a target=\"blank\" href=\"\">TODO</a>."]
};
// TAing
tabs["TAing"] = {
    "heading": "Teacher Assisting",
    "image": "https://igx.4sqi.net/img/general/600x600/15420664_hGOVMZmeEdRjy9m6BOrSR7QVtGRAS0wnROgqGDJCNrU.jpg",
    "description": ["I TA-ed for three classes at Brandeis starting sophomore year:",
        "<ul><li>Discrete Mathematics</li>" +
        "<li>Theory of Computations</li>" +
        "<li>Scientific Data Processing</li></ul>",
        "TA-ing was all about time management and communication skills. Breaking down complex ideas into simple digestable units is one of my best skills.<br/>",
        "*The picture above is the Vertica Lounge at Brandeis. It's where I spent a lot of time in college."
    ]
};
// TAing
tabs["Awards"] = {
    "heading": "Awards and Accolades",
    "image": "Images/Awards.jpg",
    "description": ["<ul><li>Highest Honors</li>" +
        "<li>National Institute of Health Computational Neuroscience Trainee Grant</li>" +
        "<li>Lerman-Neubauer Fellowship</li>" +
        "<li>Brandeis Academic Achievement Award</li>" +
        "<li>Max Chretien Award in Computer Science</li>" +
        "<li>Division of Science Prize for Outstanding Research Accomplishment in Neuroscience</li>" +
        "<li>Dean's List</li>" +
        "<li>Phi Beta Kappa</li>" +
        "<li>Summa Cum Laude</li></ul><br/>",
        "* Friend in the photo is Grady who helped me design this website."
    ]
};
// Personal
tabs["Personal"] = {
    "heading": "Personal",
    "image": "Images/Personal.jpg",
    "description": ["I like to think that I'm a generally interesting person."]
};
// Projects
tabs["Projects"] = {
    "heading": "Projects",
    "image": "Images/Projects.jpg",
    "description": ["Here is a subset of my personal projects. Many are mobile projects that have utility or can be really fun! Generally if I think of something I code it."]
};
// iGel
tabs["iGel"] = {
    "heading": "iGel",
    "image": "Images/electrophoresis.gif",
    "description": ["The summer before going to college I worked as a ranch hand in Sealy, TX, I played a lot of soccer, and I developed an iPhone app with a graduate student at the University of Texas Medical School.<br/>",
      "The idea was to reduce the cost and increase the availability of an important scientific procedure called Gel Electrophoresis. The procedure is complicated but the instruments needed aren't.",
      "<ul><li>Gel</li><li>DNA</li><li>Batteries and wire</li><li>A box with a light</li><li>Camera</li></ul>",
      "Only a few companies sold the box and camera and packed them with unnecessary features to inflate the cost to about $5,000. Because of the cost most departments only have one set, which creates a bottle neck on productivity. Most electrophoresis only requires a picture to validate correct samples and the extra features are only necessary for paper-level images.<br/>",
      "To reduce the cost and increase productivity our solution was to design a smaller box for the lab bench that an iphone could be placed in to take the picture. Then use iOS Core Image libraries to process the image. If the gel was to be used in a paper then the more advanced hardware could be used.<br/>",
      "Code can be found at my Github here. TODO"]
};
// AirlessBreathalyzer
tabs["AirlessBreathalyzer"] = {
    "heading": "Airless Breathalyzer",
    "image": "Images/Breathalyzer.jpg",
    "description": ["This was a really fun app that grew out of school project!<br/>",
      "In college I took a Android mobile development class. Our last assignment was to create an app. We wanted to make a fun app that showcased a diverse set of device APIs. We settled on an Airless Breathalyzer.<br/>",
      "The basic idea is to see how good a phone could do at giving a sobriety test. So app would have a bunch of activities that test and quantify",
      "<ul><li>Balance</li><li>Reflexes</li><li>Cognitive impairement</li><li>Pupil dilation</li></ul>",
      "Then the app would use machine learning to try to guess the users Blood Alcohol Content (BAC). Of course, collecting the training data was the most fun part :).<br/>",
      "The app is not on my Github but is currenly being finished for release by my project partner <a target=\"blank\" href=\"https://www.linkedin.com/in/oscarcourchaine/\">Oscar Courchaine</a>."],
};
// Foxus
tabs["Foxus"] = {
    "heading": "Foxus",
    "image": "Images/fox128.png",
    "description": ["My attempt to un-fuck the internet. It's a really small Chrome extension that disables the Facebook newsfeed and removes images from YouTube. Not the most complicated thing, but in terms of impact on my productivity it was wildly successful so I decided to include it. Big things come in small packages."]
};
// BluetoothApp
tabs["BluetoothApp"] = {
    "heading": "BluetoothApp",
    "image": "Images/Bluetooth.png",
    "description": ["Before joining Chrome I needed to refresh my knowledge of Anroid development and learn about Bluetooth technology. So I developed a small app that uses peer-to-peer architecture with Bluetooth Classic for transmission to allow to players to play wireless Tic-Tac-Toe.<br/>",
      "It's a small app but people find it pretty entertaining. The source code can be found at my Github here TODO."],
};
// Outdoor
tabs["Outdoor"] = {
    "heading": "Outdoor",
    "image": "Images/Outdoors.jpg",
    "description": ["A big part of my identity is my relationship to the outdoors, and I'm not picky.",
      "<ul><li>Hiking</li><li>Camping</li><li>Running</li><li>Biking</li><li>Climbing</li><ul><li>Mountain Climbing</li><li>Rock Climbing</li><li>Tree Climbing</li></ul><li>Sea Kayaking</li><li>Canoeing</li><li>Spartan Races</li><li>Sports</li><ul><li>Soccer</li><li>Beach Volleyball</li><li>Tennis</li></ul></ul>",
      "If it's outside and I'm using my body I'm loving it. My philosphy is \"A fun weekend means all I want to on Monday is sit on my ass and work until Friday.\""]
};
// Biking
tabs["Biking"] = {
    "heading": "Biking",
    "image": "Images/Biking.jpg",
    "description": ["I love biking. Not much more to it. Add me on <a target=\"blank\" href=\"https://www.strava.com/athletes/21197632\">Strava</a>."]
};
// MS150
tabs["MS150"] = {
    "heading": "MS150",
    "image": "Images/MS150.jpg",
    "description": ["I started biking with my father and brother when I was 14 to do a 190 mile two-day ride from Houston, TX to Austin, TX called the MS150. Since then I have done it 5 more times raising $2,400 to fight Multiple Sclerosis."]
};
// BikeAndBuild
tabs["BikeAndBuild"] = {
    "heading": "Bike & Build",
    "image": "Images/BnB.jpg",
    "description": ["Through service-oriented cross-country cycling trips, Bike & Build benefits affordable housing and empowers young adults for a lifetime of service and civic engagement.<br/>",
      "I participated as a rider biking from Providence, RI to Seattle, WA in the summer of 2013. It was an amazing summer and I made great friends doing it. The following semester I became the Habitat For Humanity chapter coordinator at my university.<br/>",
      "I then lead a trip from Acadia, ME to New York City, NY in 2016. The position taught me a lot about leadership. I've raised $7,000 for affordable housing."]
};
// RAMROD
tabs["RAMROD"] = {
    "heading": "RAMROD",
    "image": "Images/RAMROD.jpg",
    "description": ["My Dad, Pete Mansfield, and I did a 155 mile, 10,000 feet of elevation, single day bike ride around Mt. Rainier in July 2017. To date it's been the longest bike ride of my life. Details can be seen on my <a target=\"blank\" href=\"https://www.strava.com/athletes/21197632\">Strava</a>."]
};
// Climbing
tabs["Climbing"] = {
    "heading": "Climbing",
    "image": "Images/Climbing.JPG",
    "description": ["I love rock climbing, mountain climbing, tree climbing. Maybe I have something against gravity."]
};
// RockClimbing
tabs["RockClimbing"] = {
    "heading": "Rock Climbing",
    "image": "Images/RockClimbing.jpg",
    "description": ["I started rock climbing about a year and a half ago and I'm in love with the sport. To me, rock climbing is a lot less about pushing my strength and climbing hard routes and a lot more about pushing my technical abilities and climbing high. " +
      "My partner and I did a rock climbing roadtrip around the American West after graduating and before starting our jobs. We climbed at" +
      "<ul><li>Boulder Canyon, Colorado</li><li>Golden Colorado</li><li>Moab, Utah</li><li>City of Rocks, Idaho</li><li>Smith Rock, Oregon</li><li>Olympic National Park, Washington</li><li>Leavenworth, Washington</li></ul>"]
};
// MountainClimbing
tabs["MountainClimbing"] = {
    "heading": "Mountain Climbing",
    "image": "Images/Kilimanjaro.jpg",
    "description": ["I started rock climbing so I could be more technically skilled on alpine routes, which is where my true heart lies. Notable ascents include",
      "<ul><li>Mt. Kilimanjaro</li><li>Mt. Rainier</li><li>Chilean Norther Ice Sheet</li><li>Seven Fingered Jack</li><li>Mt. Reynolds & Mt. Clements in Glacier National Park</li><li>A bunch of Colorado 14ers</li></ul>",
      "Future goals include",
      "<ul><li>Mt. Kosciuszko</li><li>Mt. Denali</li><li>Mt. Aconcagua</li><li>All 14ers in California</li><li>All Oregon Volcanos</li></ul>"]
};
// NOLS
tabs["NOLS"] = {
    "heading": "NOLS",
    "image": "Images/NOLS.jpg",
    "description": ["I took a semester off from university and did a National Outdoor Leadership School course in Patagonia, Chile. " +
    "There I experientially studied environmental ethics, sea kayaking & mountaineering technical skills, wilderness medicine, and leadership.<br/>",
    "I was also very hungry for a semester."]
};
// BoyScouts
tabs["BoyScouts"] = {
    "heading": "Boy Scouts",
    "image": "Images/Scouts.jpg",
    "description": ["I'm an Eagle Scout and proud. Scouts taught me to be trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.<br/>",
      "Above that, scouts gave me some of the best friends and experiences I could ask for.<br/>",
      "* Picture above contains the whole crew except for David. He must been somewhere downstream."]
};
