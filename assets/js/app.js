const signOutEL = document.getElementById('sign-out');
const pauseIconEl = document.getElementById('pause-icon')
const upcomingBtn = document.getElementById('upcomingBtn')
const upcomingMovie = document.getElementById('upcoming');
const tvSeriesBtn = document.getElementById('tvSeriesBtn')
const tvSeriesMovie = document.getElementById('tvSeries');
const moviesBtn = document.getElementById('moviesBtn')
const movies = document.getElementById('movies');
const cartoonBtn = document.getElementById('cartoonBtn')
const cartoon = document.getElementById('cartoon');
const comedyBtn = document.getElementById('comedyBtn')
const comedy = document.getElementById('comedy');
const actionBtn = document.getElementById('actionBtn')
const action = document.getElementById('action');
const fantasyBtn = document.getElementById('fantasyBtn')
const fantasy = document.getElementById('fantasy');
const homeBtn = document.getElementById('homeBtn')
const appEl = document.getElementById('app');
const boxHeadingBtn = document.querySelectorAll('.box-heading');
const movieDescription_1 = document.querySelector('.movie-description-1');
const movieDescription_2 = document.querySelector('.movie-description-2');
const movieDescription_3 = document.querySelector('.movie-description-3');
const movieDescription_4 = document.querySelector('.movie-description-4');
const movieDescription_5 = document.querySelector('.movie-description-5');
const movieDescription_6 = document.querySelector('.movie-description-6');
const movieDescription_7 = document.querySelector('.movie-description-7');
const movieDescription_8 = document.querySelector('.movie-description-8');

const movieInfo = [
    {
        id: 1,
        movieName: 'Creed III',
        category: 'Action',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '198',
        author: 'Michael B. Jordan',
        actor: 'Michael B. Jordan, Tessa Thompson, Jonathan Majors, Wood Harris, Florian Munteanu, Phylicia Rashad',
        img: 'https://resizing.flixster.com/6R5NafclJ9o7utVZiBRX9S5Z_2g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlkMTI1OGQzLTI0ZTMtNDZhZC1hNzllLTNlNzIxZGY1ZDA4Mi5qcGc=',
        description: 'After the events of Creed II (2018), Adonis "Donnie" Creed (played by Michael B. Jordan) is at the peak of his boxing career as well as his family life. But that all changed when a childhood friend and former boxing prodigy, Damian "Dame" Anderson (played by Jonathan Majors), re-emerges after a long prison sentence, he is eager to see.to assert himself worthy of appearing in the ring.And a more intense confrontation than a competition between old friends occurred.To settle the score, Donnie had to put her future first to fight Dame - a boxer with nothing to lose.'
    },
    {
        id: 2,
        movieName: 'Ant-Man and the Wasp: Quantumania',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '298',
        category: 'Action',
        author: 'Peyton Reed',
        actor: 'Paul Rudd, Evangeline Lilly, Jonathan Majors, Kathryn Newton, David Dastmalchian, Katy O Brian, William Jackson Harper, Bill Murray, Michelle Pfeiffer, Corey Stoll, Michael Douglas',
        img: 'https://resizing.flixster.com/_0Mhf0W_vdhwlaqOaUDX6JiReKA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE0OGY2MTIxLTE1MDEtNDI5YS1hYzVlLWYyMzExYjBmZTlhMC5qcGc=',
        description: 'The film is a sequel to the 2018 hit "Ant-Man and the Wasp" and will be directed by Peyton Reed. The film stars Paul Rudd and Evangeline Lilly, reprising their roles in the first two films, as well as a new star, Jonathan Majors, as the villain Kang the Conqueror. The film follows Scott and Hope as they team up with a new ally, a young superhero with quantum physics powers named Cassie Lang, to face the powerful and dangerous Kang the Conqueror. With the help of the original Ant-Man Hank Pym and Wasp, Hope van Dyne, they must find a way to stop Kang and his plan to take over the world. The film promises to be full of action and special effects, as well as bringing viewers a new and more fascinating view of the world of quantum physics. The film will also further explore the relationship between Scott and Cassie, as well as other characters in the film. "Ant-Man and the Wasp: Quantumania" is slated to premiere in 2023.'
    },
    {
        id: 3,
        movieName: 'Creed IIIJesus Revolution',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '173',
        category: 'Action',
        author: 'Jon Erwin',
        actor: 'Joel Courtney, Jonathan Roumie, Kimberly Williams-Paisley',
        img: 'https://resizing.flixster.com/FLuS1mtbLsmLtJCuxgvnN8PZ1Bg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU5ODQ1Y2M1LWY1MWEtNDIzOS04NDRjLTcwMTlkY2Q5MGE3NS5qcGc=',
        description: 'In 1968, a staid yet respected Southern California pastor, Chuck Smith, finds that his church is slowly dying with an inability to connect with the younger, live-free generation of hippies. One day, his daughter, Janette, gives a ride to a colorful hippie hitchhiker named Lonnie Frisbee, who says he is traveling around and telling people about the Ministry of Jesus. Smith, at first suspicious of Frisbee, eventually warms up to him and welcomes other hippies to his house. They join forces and start a successful movement to evangelize hippies and others. Meanwhile, high-school student Greg Laurie runs away from his Junior Reserve Officers. Training Corps class and joins a girl named Cathe who "turns him on" to a rock concert featuring Timothy Leary preaching the value of drugs for self - discovery.However, Greg sees that various hippies are dangerously irresponsible; Cathe is sister gets sick from a drug overdose. Greg and Cathe find solace at Smith and Lonnie is ministry, though Cathe is uptight parents are not enthusiastic about Greg. The ministry explodes in popularity, being seen as a "Jesus Revolution" or "Jesus freaks", and even sparking a Time magazine cover in 1971. However, Lonnie becomes egotistical and eventually splits with Smith, though they reconcile later on. Greg offers to take over a ministry branch in Riverside, and eventually marries Cathe and becomes a famous pastor himself. Smith and Frisbee are remembered as founders of the widespread Calvary Chapel movement, and more generally as leaders in the Jesus movement.'
    },
    {
        id: 4,
        movieName: 'Cocaine Bear',
        category: 'Action',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '128',
        author: 'Elizabeth Banks',
        actor: 'Keri Russell, O Shea Jackson Jr.Christian Convery, Alden Ehrenreich, Brooklynn Prince, Isiah Whitlock Jr. Margo Martindale, Ray Liotta',
        img: 'https://m.media-amazon.com/images/M/MV5BODAwZDQ5ZjEtZDI1My00MTFiLTg0ZjUtOGE2YTBkOTdjODFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
        description: 'In 1985, drug smuggler Andrew C. Thornton II drops a shipment of cocaine from his plane. He attempts to parachute out with a drug-filled duffel bag, but knocks himself unconscious on the doorframe, causing him to fall to his death. His body lands in Knoxville, Tennessee where he is identified by Bob, a local detective. He concludes that the cocaine is likely from St. Louis drug kingpin Syd White, and the remainder is missing. Meanwhile, in the Chattahoochee-Oconee National Forest, an American black bear eats some of the cocaine, becoming highly aggressive and attacking two hikers, Elsa and Olaf, killing the former. In northeast Georgia, middle schooler Dee Dee lives with her mother, nurse Sari. Dee Dee skips school with her best friend Henry in order to paint a picture of the falls in the forest. On the trail to the falls, the pair finds a lost brick of cocaine, and ingest some before they are attacked by the bear. Sari ventures into the forest to search for the kids with park ranger Liz and Peter, a wildlife activist. The three find Henry clinging to a tree, hiding from the bear. The bear attacks, sending Peter stumbling through a pile of cocaine and slashing Liz in the process. Attracted to a cocaine-coated Peter, the bear kills him, ignoring Henry. Sari and Henry flee deeper into the forest, and Liz sends for help. In St. Louis, Syd sends his fixer Daveed to recover the remaining cocaine. Daveed travels to Georgia with Eddie, Syd is son, who has grown depressed following the death of his wife and has abandoned his own son. They arrive in Georgia, as does Bob. At the forest station, Daveed gets into a fight with the Duchamps gang, three delinquents who cause trouble in the forest. One of the members, Stache, takes Daveed and Eddie to recover some of the cocaine he stashed in a gazebo. Liz arrives back at the station, pursued by the bear. Liz accidentally kills Ponytail, one of the Duchamps, before the bear slaughters Vest, the other one. Paramedics Beth and Tom arrive and collect Liz after a brief skirmish with the bear. They leave with Liz in an ambulance, but the bear pursues and jumps into the vehicle. In the ensuing chaos, Tom is killed by the bear, while Liz falls out of the ambulance and is crushed on the road. Beth loses control of the ambulance and crashes into a tree, causing her to fly through the windshield to her death.'
    },
    {
        id: 5,
        movieName: 'Infinity Pool',
        category: 'Action',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '101',
        author: 'Brandon Cronenberg',
        actor: 'Alexander Skarsgård, Mia Goth, Cleopatra Coleman',
        img: 'https://resizing.flixster.com/P6s0RlGDQvFmVgWgdBbyuAZwHMU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFhZjcxYTQ3LTExY2UtNDUxNy05NTI5LWI2ZjhkMGY1ODg1MS5qcGc=',
        description: 'The film follows James (Alexander Skarsgård) and Em Foster (Cleopatra Coleman), a wealthy couple who decide to vacation in a fictional foreign country, where they are advised never to leave the resort is boundaries.nursing.The couple went there in the hope that James could finally find some inspiration for his second novel and thus, stop living solely on the money Em received from his rich publishing father.have his own.Unfortunately, when a vacationing couple, Alban(Jalil Lespert) and Gabi Bauer(Mia Goth), convince James and Em to leave the resort with them, things quickly go awry.On his way back from an ill- advised excursion, James accidentally runs over and kills a local boy.The next morning, he and Em were arrested and briefly detained in a dilapidated, rundown government building.While there, James learns that the penalty for manslaughter in the fictional foreign country is infinity pool is death. However, James himself was not executed for his crimes. Instead, Em is wealth allows him to participate in a federal tourist - only program of the country - a program in which James allows an identical physical copy of himself to be created.and was later executed in his place.Upon returning to his and Em is resort, James realizes that he is not the only one present to participate in the strange cloning process in the infinity pool. So did Gabi and Alban years ago, and after engaging in an illegal night of crime with them and their wealthy friends, James plunges headlong into a nightmare path of hedonism and debauchery cannot turn back. His increasingly erratic behavior not only isolated him from Em, who easily flew back to America at the first opportunity, but also left him completely unprepared for the infinity pool action. surreal third is. The final season of the film sees James realize that, despite engaging in some drug orgies and crime nights with him, Gabi and her friends don not really care. to him. Unfortunately, when he tried to end their escape by secretly flying home, he was stopped by Gabi and her friends on their way out of the country. Goth, who has seemingly reached a whole new level of insane transcendence on screen over the course of the past year, chews and spits out every line of hers in the infinity pool – but never more. when she forced James to walk down the street in front of her and Alban is car while she read aloud to him the horrible reviews of his first book.'
    },
    {
        id: 6,
        movieName: 'Triangle of Sadness',
        category: 'Action',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '300',
        author: 'Ruben Östlund',
        actor: 'Harris Dickinson, Charlbi Dean, Dolly de Leon, Zlatko Burić, Iris Berben, Vicki Berlin, Henrik Dorsin, Jean-Christophe Folly, Amanda Walker, Oliver Ford Davies, Sunnyi Melles, Woody Harrelson',
        img: 'https://resizing.flixster.com/z6ABTqY9Z_hs2mKAokadKfuTHyg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI5NTZjNDYwLWFkNDgtNDhlZC05OWE5LWZlYzRhMjgwZDJjMC5qcGc=',
        description: 'The bottom of the upper class opens the story of an "emerging" couple, that is Carl (Harris Dickinson), a handsome male model, and Yaya (Charlibi Dean), a social media star. Not only possessing a splendid appearance, the two of them also display their lavishness and frivolity through social networks. Carl and Yaya are invited on a most luxurious cruise for the elite. The party is filled with extravagance with lots of activities and loads of super-rich characters. Also here, mixed with humorous and satirical situations, gradually revealed, describing many hidden corners behind people with money and status in society. An ironic situation occurs, these super rich people are stranded on a deserted island and must fight to survive. At this time, people who are very proud have to fall into "struggling", even with how much money they can not solve the small problems that arise. At this moment, all their lives depend on a woman who specializes in cleaning toilets and cleaning on yachts.'
    },
    {
        id: 7,
        movieName: 'Knock at the Cabin',
        category: 'Action',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '118',
        author: 'M. Night Shyamalan',
        actor: 'Dave Bautista, Jonathan Groff, Ben Aldridge, Nikki Amuka-Bird, Kristen Cui, Abby Quinn, Rupert Grint',
        img: 'https://m.media-amazon.com/images/M/MV5BZDA0MzcxZTgtMTAzZC00MGJkLTg3YzItZjMzNjkwOTVlODNlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
        description: 'The story of the film revolves around a family including Andrew, Eric and their daughter Wen on a vacation at a wooden house in the suburbs. The incident occurred when a group of 4 people including: high school teacher Leonard, nurse Sabrina, kitchen assistant Ardiane and store employee Redmond suddenly and repeatedly pushed the Wen family to choose a sacrifice to rescue. mankind. The fiction gradually becomes real, to the point of crushing the unwavering faith of the couple Andrew and Eric when every time a petition is refused, a natural disaster or disaster will erupt on a global scale.'
    },
    {
        id: 8,
        movieName: 'Avatar: The Way of Water',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '100',
        category: 'Action',
        author: 'James Cameron',
        actor: 'Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang, Cliff Curtis, Joel David Moore, CCH Pounder, Giovanni Ribisi, Edie Falco, Jemaine Clement, Kate Winslet',
        img: 'https://i.ebayimg.com/images/g/IrMAAOSwe89ir7jD/s-l1600.jpg',
        description: 'More than a decade after the Na vi repelled the human invasion of Pandora by the Resource Development Authority (RDA), Jake Sully lives as the patriarch of the Omaticaya clan and has a family. with Neytiri, consisting of sons Neteyam and Lo ak, daughter Tuk, adopted daughter Kiri (born of Grace Augustine is inert incarnation), and a human boy named Spider, son of the Colonel Miles Quaritch, who was born on Pandora and was unable to be transported to Earth in a frozen state due to being young. To the dismay of the Na vi, the RDA returns to prepare their home world of Pandora for human invasion, under the pretext that the Earth is dying. Among the newly arrived RDAs is the recombinant, the Na vi substitute implanted with the minds and memories of dead soldiers, with Quaritch is recombinant acting as their leader. Jake conducts a guerrilla campaign against the RDA is supply lines, but Quaritch and his subordinates go on a mission against Jake is rebels and kidnap his children. Jake and Neytiri arrived and freed most of them, but Spider was taken away by Quaritch, who recognized him as her son. He decided to spend time with him to attract Spider to him, and in return, Spider taught Quaritch about Na vi culture and language. Aware of the danger that Spider knew his whereabouts could pose to their safety, Jake and his family left Omaticaya and retreated to the Metkayina reef people on the west coast. east of Pandora. Although Jake and his family are given shelter, they are viewed with aversion by some in the tribe due to their human heritage. However, the family learns of the reef-dwellers way of life, Kiri develops a spiritual bond with the sea and its creatures, and Lo ak befriends Tsireya, the daughter of the Tonowari patriarch and his wife. Mr. Ronald. Lo ak fights with Aonung, Tsireya is brother. When he returned to apologize at Jake is insistence, Aonung and his friends lured him on a trip into the territory of a dangerous sea predator and left him stranded. Lo ak is saved and befriends Payakan, a tulkun, an intelligent and pacifist whale whom the Metkayinas consider to be their spiritual family.'
    },
    {
        id: 9,
        movieName: 'Shazam! Fury of the Gods',
        category: 'fantasy',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '118',
        author: 'Henry Gayden',
        actor: 'Zachary Levi, Asher Angel, Jack Dylan Grazer, Rachel Zegler, Helen Mirren, Lucy Liu',
        img: 'https://pbs.twimg.com/media/FplxxadXEAA3csj?format=jpg&name=large',
        description: 'The film follows Billy Batson and his superhero character as he confronts new enemies and uncovers more origins about himself. It reappears with the excellent cast from the first season, including Zachary Levi as Shazam, Mark Strong as Dr. Thaddeus Sivana, and Asher Angel as Billy Batson. New characters are introduced, such as Rachel Zegler as Mary Bromfield and Sinbad as the Witch. With lots of action and love, Shazam 2 is an entertaining and exciting movie. The story continues in an interesting way, as the characters continuously mature and evolve while confronting new enemies. The special effects technology is well done and the film is really beautiful. The fight scenes are well choreographed, and Shazam is power is shown in a very attractive way. The film also brings a lot of love and humor, helping to balance the action. The characters are fully developed and we get to see more of their relationships and motives. Overall, Shazam 2 is a great sequel, building on the success of the previous one. It is an entertaining and fun movie for the whole family and a great way to spend a few hours of entertainment.'
    },
    {
        id: 10,
        movieName: 'John Wick: Chapter 4',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '202',
        category: 'fantasy',
        author: 'Chad Stahelski',
        actor: 'Keanu Reeves, Laurence Fishburne, Lance Reddick, Chân Tử Đan, Rina Sawayama, Shamier Anderson, Bill Skarsgård, Scott Adkins, Hiroyuki Sanada, Clancy Brown Ian McShane',
        img: 'https://m.media-amazon.com/images/M/MV5BZDJiNTUyZWQtNGFkNy00ODhkLWJkNWMtOTI1ODhhYmNiYzU0XkEyXkFqcGdeQXVyMTMxNTMyNDQw._V1_FMjpg_UX1000_.jpg',
        description: 'At an ever-increasing cost, John Wick joins the global war against the High Table as he searches for the most powerful players in the underworld, from New York to Paris, Osaka to Berlin.'
    },
    {
        id: 11,
        movieName: 'Guardians of the Galaxy',
        category: 'fantasy',
        nation: 'American',
        time: '211 minutes',
        resolution: 'Full HD',
        view: '198',
        author: 'James Gunn',
        actor: 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper, Lee Pace, Michael Rooker, Karen Gillan, Djimon Hounsou, John C.Reilly, Glenn Close, Benicio del Toro, Sean Gunn',
        img: 'https://upload.wikimedia.org/wikipedia/vi/3/31/Guardians_Of_The_Galaxy_3_poster.jpg',
        description: 'Opening the film, director James Gunn skillfully used the first five minutes to reintroduce the squad is characters and their styles. Through the scenes of fighting with space monsters, the big screen audience can recognize the clumsy leader Peter Quill (played by actor Chris Pratt), the hot-tempered boy Drax (played by actor Dave Bautista). role) enthusiastic but limited intelligence, brave female warrior Gamora (actress Zoe Saldana), the rambunctious weasel Rocket (voiced by Bradley Cooper) and baby tree Groot (played by Bradley Cooper) Vin Diesel) is full of wit. While the group was fighting the octopus-like monster, the little tree Groot was engrossed in swaying to the fun music of the Mr. Blue Sky. The film is set after Guardians of the Galaxy Vol. 1. The Guardians of the Galaxy team then continue to work together to solve new tasks on planets in the vast universe. After the group defeats an interstellar monster to protect the most expensive energy batteries in the universe, Rocket is discovered to have stolen some of them. High Priest of the Sovereign race Ayesha (Elizabeth Debicki) attacks the Guardians ship with a fleet of drones. He possessed superior technology and intelligence and was the same person who had hired them to carry out this task. The surprise attack forces the Guardian ship to make an emergency landing on a nearby planet. Here a strange white ship appeared, helped the guard team destroy the drones, and landed. The whole squad was rescued by a powerful character, Ego (played by Kurt Russell). However, an unexpected episode happened when he suddenly revealed that he was the father of captain Peter Quill and offered to bring him and his team back to his planet. Three people, Peter Quill, Gamora and Drax, went to his planet, and Rocket and Groot chose to stay behind to repair the ship and watch over Nebula. But the group did not expect, this incident was the beginning of a new adventure full of hardships.'
    },
    {
        id: 12,
        movieName: 'The Flash',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '372',
        category: 'fantasy',
        author: 'Greg Berlanti, Andrew Kreisberg và Geoff Johns',
        actor: 'Grant Gustin, Candice Patton, Danielle Panabaker, Rick Cosnett, Carlos Valdes, Tom Cavanagh, Jesse L. Martin, Keiynan Lonsdale, Tom Felton',
        img: 'http://popcornsg.s3.amazonaws.com/gallery/1635206953-the-flas.jpg',
        description: 'The film follows the adventures of Barry Allen, a mysterious young man with the ability to move at superhuman speed. The movie is full of exciting action scenes and exciting special effects. Flash 2023 stars some of the most talented young actors out there, like Cody Christian and Bryshere Gray. Cody Christian did a great job of portraying Flash with an energetic performance, and Bryshere Gray was also impressed with Dr. X is evil role. Flash 2023 is story is unique and engaging. It follows Flash is mission to prevent Dr. X from releasing a dangerous new technology into the world. The plot has many twists and turns and keeps viewers curious to the end. The special effects in Flash 2023 are excellent. Flash scenes moving at superhuman speeds are particularly captivating. The fight scenes are carefully prepared, and the computer effects are made very realistic. In short, Flash 2023 is an entertaining movie. It is full of action, great special effects, and an engaging story. If you are looking for a fun movie to watch, I would definitely recommend Flash 2023.'
    },
    {
        id: 13,
        movieName: 'Beau Is A Fear',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '134',
        category: 'fantasy',
        author: 'Ari Aster',
        actor: 'Joaquin Phoenix, Nathan Lane, Patti LuPone, Kylie Rogers, Parker Posey, Amy Ryan, Stephen McKinley Henderson, Denis Ménochet, Hayley Squires, Michael Gandolfini, Zoe Lister-Jones, Richard Kind',
        img: 'https://m.media-amazon.com/images/M/MV5BYTNhNWRmMDctYzE4OS00MzczLWJkODgtNzYxZTQxM2Y1YmM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        description: 'Described as a "decade-long surrealist thriller set in another present day, Joaquin Phoenix plays Beau, an "extremely nervous but pleasant-looking man who has strained relationship with his overbearing mother who never knew his father is face. When his mother passed away, he went on a journey home involving some wild supernatural threats.'
    },
    {
        id: 14,
        movieName: 'Evil Dead Rise',
        category: 'fantasy',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '98',
        author: 'Lee Cronin',
        actor: 'Lily Sullivan, Alyssa Sutherland, Morgan Davies, Gabrielle Echols, Nell Fisher',
        img: 'https://top-mmo.fr/wp-content/uploads/2022/12/Evil-Dead-Rise-Movie-Poster.jpg',
        description: 'David Allen and his girlfriend, Natalie, arrive at a chalet in the wilderness during the night. There, David meets his younger sister, Mia, along with Eric, a school teacher, and Olivia, a nurse. They all spend the night in the chalet to help Mia, who is addicted to drugs. Upon entering the cabin, Mia smelled a very strong stench, while the others felt nothing. As he prepared to clean up, David found an upstairs door leading to the basement. In the room, David and Eric find some rotting animal carcasses, a rifle and a strange book called the Naturom Demonto. In the evening, Eric opens the book. He was curious to read a spell written in it. Eric did not realize that he had raised an evil demon from hell. When it rains heavily, Mia sees a mysterious girl standing in the forest. He then explained his vision to others, but they assumed he was hallucinating. Frightened and unable to control her addiction, Mia stole Eric is car to escape. While trying to escape, his car crashed into a tree and plunged into the swamp. Then Mia ran into the forest. He was faced with a demon that trapped him until it took possession of his body. David and the others then find Mia lying in the woods. When they bring her back to the cabin, Mia suddenly behaves very strangely and injures Olivia. David then pushes Mia to the basement and locks her there. On the other hand, Olivia turns out to be possessed by a demon due to the wound Mia inflicted on her. Eric tries to help him, but Olivia stabs him with a syringe instead. Eric, who felt cornered, beat him until he died. Meanwhile, Natalie is successfully lured by the whispers of the devil that has haunted Mia to the basement. While there, Mia bites Natalie and cuts her hand. David then quickly saves Natalie and closes the hatch. Eric then told David that he had committed the sin of casting spells in the book they had found. He also explains that the Naturom Demonto is a book of death and that the demons will come back to life when they kill 5 people. According to the book, Eric reveals that a person once possessed by a demon can be "purified" again in three ways: buried alive, mutilated, or burned alive. So David and Eric were indirectly forced to kill Mia. As a short story, Natalie had one of Mia is infected arms amputated. However, he is still possessed by demons and attacks David and Eric with a nail gun. David manages to shoot Natalie.'
    },
    {
        id: 15,
        movieName: 'Dune',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '181',
        category: 'fantasy',
        author: 'Denis Villeneuve',
        actor: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, Stephen McKinley Henderson, Zendaya, Trương Chấn, Sharon Duncan-Brewster, Charlotte Ramplin, Jason Momoa, Javier Bardem',
        img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Mde7eiFbL.jpg',
        description: 'In the distant future, Duke Leto of House Atreides - ruler of the ocean planet Caladan - has been commissioned by Emperor Padishah Shaddam Corrino IV to replace House Harkonnen as ruler of Arrakis as fiefdom. Arrakis is an inhospitable desert planet and the sole source of "herb", a precious resource with the ability to prolong life and raise consciousness. The substance is important for space travel because it allows the Space Society is pilots to use a limited amount of consciousness to safely steer their spacecraft. In reality, Shaddam intends for House Harkonnen to stage a coup to retake the planet with the help of the Emperor is Sardaukar army, destroying House Atreides, whose influence threatens domination. by Shaddam. Leto, though frightened, saw the political advantage of controlling the spice planet and formed an alliance with the native inhabitants of Arakis - skilled warriors known as Fremen. Leto is wife, Lady Jessica, is a Bene Gesserit, a religious order whose members possess advanced mental and physical abilities. As part of a centuries-long program of crossbreeding, the Bene Gesserit instructed Jessica to give birth to a daughter whose son would become a male Bene Gesserit known as Kwisatz Haderach, a messianic superhuman with the ability clairvoyance can lead mankind to a better future; however Jessica gave birth to Paul Atreides instead – a son.'
    },
    {
        id: 16,
        movieName: 'Transformers: Rise of the Beasts',
        category: 'fantasy',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '285',
        author: 'Steven Caple Jr.',
        actor: 'Anthony Ramos, Dominique Fishback',
        img: 'https://img.cdn.vncdn.io/cinema/img/90225202119197600-imzUKQbSanWDJcCsY9QKmk9qmDp.jpg',
        description: 'The origin story of Optimus Prime and how he became the leader of the Autobots, and the introduction of Maximals, Predacons, and Terrorcons.'
    },
    {
        id: 17,
        movieName: 'The Equalizer',
        category: 'Comeny',
nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '198',
        author: 'Antoine Fuqua',
        actor: 'Denzel Washington, Chloë Grace Moretz, Marton Csokas, David Harbour, Bill Pullman, Melissa Leo',
        img: 'https://resizing.flixster.com/TEM5vrT0Kg1_L9tVi4-awVB_NYY=/206x305/v2/https://flxt.tmsimg.com/assets/p10549100_p_v8_ar.jpg',
        description: 'Robert McCall is a former CIA agent, he lives in Boston and works as an employee at the nearby Home Mart supermarket. Late at night, when it is difficult to sleep, he goes to a cafe to read a book, from which he befriends Alina - a teenage prostitute working for the Russian mafia. The Russian pimps beat Alina so much that she had to be hospitalized. Merciful for Alina is plight, Robert brought money to Russian pimps in exchange for Alina is freedom, but the Russians refused and insulted him. Robert then used his melee skills to kill all these mafias. Vladimir Pushkin, a big Russian tycoon, has sent his trusted subordinate Nicolai Itchenko to America to investigate the deaths of Russian pimps. Meanwhile, Robert also punished two corrupt policemen in the area, forcing them to return the money they had robbed from the people. After a period of investigation, Itchenko suspected that Robert was the killer of Russian pimps, he let his subordinates follow him. But Robert was smarter and he escaped. The next day Robert went to Virginia to visit his former partner and his wife, thereby learning more about Pushkin is criminal organization. Returning to Boston, Robert tortured corrupt police officer Frank Masters with gas to force him to cooperate with him. Robert then helps the police bust a vault containing Pushkin is money. Robert meets Itchenko at a restaurant, vowing to overthrow Pushkin is criminal organization. When Robert blows up Pushkin is cargo ship, an angry Pushkin orders Itchenko to kill Robert immediately. Pushkin also said that if Itchenko can not kill Robert, do not go back to Moscow. Itchenko led his subordinates to the Home Mart supermarket, took Robert is colleague hostage and forced him to surrender. Robert sneaks in to rescue his colleagues, then he destroys the Russian mafia one by one. Robert shot Itchenko dead with a nail gun. Three days later, Robert went to Moscow and killed boss Pushkin by electrocuting him. Alina is now healthy and has a new job, she thanks Robert for giving her the opportunity to rebuild her life. Robert continues to use his skills to help people around.'
    },
    {
        id: 18,
        movieName: 'Aquaman',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '158',
        category: 'Comeny',
        author: 'James Wan',
        actor: 'Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Johnson, Nicole Kidman',
        img: 'https://mephimtv.cc/wp-content/uploads/2022/05/aquaman-2-va-vuong-quoc-da-mat-thumb.jpg',
        description: 'Aquaman is the story of Arthur Curry aka Aquaman is origin, power, and journey to claim the throne of Atlantis.This is DC is first stand-alone superhero movie, although we have seen him a bit in Batman v Superman(2016) and Justice League(2017).Therefore, the film is content is relatively simple with a familiar tip, focusing on introducing characters and is quite easy to understand for everyone.'
    },
    {
        id: 19,
        movieName: 'Wonka',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '245',
        category: 'Comeny',
        author: 'Paul King',
        actor: 'Timothée Chalamet, Keegan-Michael Key, Sally Hawkins, Jim Carter, Matt Lucas, Natasha Rothwell, Olivia Colman, Rowan Atkinson',
        img: 'https://www.themoviedb.org/t/p/w500/heynsw1ZcTTxkxZpO1nR8wJv4jh.jpg',
        description: 'The film will be a story revolving around young Willy Wonka and his adventures before opening the world is most famous chocolate factory.'
    },
    {
        id: 20,
        movieName: 'Mrs Chatterjee Vs Norway',
        category: 'Comeny',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '378',
        author: 'Ashima Chibber',
        actor: 'Rani Mukerji, Anirban Bhattacharya, Neena Gupta, Jim Sarbh',
        img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mrs-chatterjee-vs-norway-et00319185-1678274110.jpg',
        description: 'The story is based on real life case with Sagarika Bhattacharya who was living with her husband Anup Bhattacharya with two children. They moved to Norway for a job. In 2011, their children were taken away by Barnevernet (also known as Norwegian Child Welfare Services) on the ground of improper treatment of children. First they appealed in a Norwegian court but failed. Later on they appealed Ministry of External Affairs, Government of India to intervene. Before this Sagarika got separated with her husband and custody of the children were given to their father is brother. In 2013, after she fought a two year long legal battle she was granted custody by Calcutta High Court after intervention by the Indian Government.'
    },
    {
        id: 21,
        movieName: 'Mission: Impossible – Ghost Protocol',
        category: 'Comeny',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '176',
        author: 'Brad Bird',
        actor: 'Tom Cruise, Jeremy Renner, Simon Pegg, Paula Patton',
        img: 'https://i1-giaitri.vnecdn.net/2015/07/31/mission-impossible-ghost-proto-4178-2875-1438337819.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=rjA5aNkDhoXQan1-b7L_gA',
        description: 'While on a mission in Budapest, Hungary, to intercept a shipment of nuclear missile launch codes for terrorist Cobalt, IMF agent Trevor Hanaway was killed by French female assassin Sabine Moreau. Therefore, the leader of the IMF team, decided to send the remaining people including Jane Carter, Benji to rescue Ethan Hunt and a friend of his named Bogdan from a prison in Moscow. After escaping and being briefly explained by Jane Carter and Benji, Ethan Hunt began to receive assignments directly from the IMF. As usual, this is also one of the seemingly "impossible" tasks, which is to discredit himself as a general and infiltrate the secret archives of the Kremlin, steal a file of his name. Cobalt is true nature. Although the group worked well together and successfully bypassed the protected storage and infiltrated the archive, the plan still failed in the end. Cobalt kills a security guard in another storage room and steals a suitcase, and also hacks into the radio frequencies where the entire IMF team is operating, alerting the security guards to Ethan and Benji. and Jane had to flee without getting Cobalt is files. When moving, Ethan encountered and suspected that the man holding the suitcase was Cobalt, was about to chase him when suddenly many bombs began to explode violently. As a result, many civilians around along with Ethan were seriously injured, he was taken to the hospital but was handcuffed by SVR agent Anatoly Sidorov, because he discovered that Ethan was wearing a shirt pretending to be a general, so he suspected he was the one. Bombers destroy the Kremlin. Ethan Hunt with dexterity reached a pin and removed the handcuffs for himself, he began to sneak out the window but was still found by the other agent. With a rather cumbersome handling phase, Ethan successfully escaped to the surprise of the Russian agent. Ethan met the IMF secretary with his analyst William Brandt in a car. He announced that the president had initiated "Operation Ghost", that is, refused to acknowledge all information related to the IMF, because now relations between the United States and Russia are more tense than ever, because Russia think the members of the IMF were the ones who bombed the Kremlin. The Minister thanked Ethan for his dedication and said he always considered him a friend, giving Ethan a USB containing a secret mission to continue pursuing Cobalt.'
    },
    {
        id: 22,
        movieName: 'Guy Ritchie is The Covenant',
        category: 'Comeny',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '285',
        author: 'Guy Ritchie',
        actor: 'Jake Gyllenhaal, Dar Salim',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVft5LGL5sXBASLeNJ8MvitLq5QbqqWkzIV3lTSaoCcsz44zQJ1CS06mO6RLhozklDYGU&usqp=CAU',
        description: 'During the War in Afghanistan, US Sergeant John Kinley recruited Ahmed to translate for local Afghans during their mission in Afghanistan. Ahmed agrees to pursue revenge against the Taliban for the death of his son. When the soldiers platoon confronted the Taliban in the desert, they were caught off guard and Kinley was taken down. Before his capture, Ahmed rescued Kinley by dragging him through the desert mountains to avoid the Taliban. Kinley later returns to the United States, but quickly learns that Ahmed is being pursued by the Taliban and is hiding somewhere in Afghanistan. When U.S. authorities refused to answer, Kinley made his own way back to Afghanistan to rescue his friend who risked his life for a complete stranger.'
    },
    {
        id: 23,
        movieName: 'Wolf Warrior',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '165',
        category: 'Comeny',
        author: 'Jason Wu',
        actor: 'Wu Jing, Scott Adkins, Yu Nan, Kevin Lee',
        img: 'http://simg1zen.myclip.vn/image1/2021/03/17/1615975143408/f88673998d2d_384_570.jpg',
        description: 'In 2008, a combined task force of the People is Liberation Army Special Operations Force and Chinese police raided a drug smuggling operation at an abandoned chemical facility in southern China. The leader of the smuggling operation, Wu Ji, holds one of his men hostage while hiding behind part of the facility is reinforced wall. Leng Feng, a skilled PLA sniper, ignored orders to stand down and fired three times into a weak part of the wall, piercing the third shot and killing Wu Ji. Leng Feng is placed in solitary confinement as punishment, but is approached by Long Xiaoyun, the female commander of the legendary Wolf Warriors, an elite unit within the PLA tasked with simulating foreign tactics for the PLA to train. practice against. Long Xiaoyun gave Leng Feng a slot in Warrior. Meanwhile, in the Philippines, crime lord Min Deng, brother of Wu Ji, hires former US Navy SEAL "Tom Cat" (Scott Adkins) and his team to assassinate Leng Feng and avenge him. his son. The Wolf Warriors take part in an exercise in a remote and uninhabited forested area on China is southern border. During the drill, Tom Cat and his mercenaries ambushed a team of Wolf Warriors, killing one of Leng Feng is teammates. Later, the PLA and the Wolf Warrior were tasked with hunting down Cat Tom is squad to restore honor. The combined infantry force moved into the forest but was delayed by multiple traps set by Tom Cat and shot down by sniper fire until Leng Feng killed the shooter. Afterwards, the rest of the PLA forces engaged Tom Cat is other mercenaries, who retreated in combat but were eventually overwhelmed and killed one by one. Meanwhile, Leng Feng finally caught Tom Cat right in front of China is southern border. Leng Feng was almost defeated, but managed to kill Tom Cat with his own knife. Medical personnel from the PLA relief force arrive, but Leng Feng notices the tattoo on the wrist of the medic approaching him and realizes that they are Min Deng is men in PLA uniform. He attacked them, eventually holding Min Deng with a bayonet at the very edge of the Chinese border. Min Deng is paramilitary force approached from across the border, but so did the rest of the Wolf Warriors and PLA soldiers. Min Deng is forces retreat, causing him to be captured.'
    },
    {
        id: 24,
        movieName: 'IP Man Bruce Lee',
        category: 'Comeny',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '179',
        author: 'Diep Vy Tin',
        actor: 'Donnie Yen, Nham Dat Hoa, Hung Dai Lam, Lam Gia Dong, Like Hanh Vu, Phan Thieu Hoang, Hiroyuki Ikeuchi, Diep Vy Tin',
        img: 'https://upload.wikimedia.org/wikipedia/vi/5/57/Rsz_ip_man.jpg',
        description: 'The film is set in Foshan, one of the cradles of Chinese martial arts at that time. At that time, Ip Man was the owner of the Diep family, living in the mansion with his wife and son. Ip Man is early life was quite smooth, every day he spent most of his time practicing and exchanging martial arts with friends, one of which was Master Lieu (losing miserably when he fought Ip Man :v :v :v v :v). Once, Foshan appeared a character named Kim Son Trao, from the North. This guy is aggressive and rude, he came to Foshan to win the title of the first martial artist, and also to establish a martial arts studio in Foshan. Therefore, he found all the martial arts masters in Foshan to compete. Actually, at that time, besides Ip Man, the other masters were just shrimp and shrimp, so this guy beat him to pieces. He alone caused a disturbance in Foshan, then he even went to Ip Man is house to compete. At first he refused, then when he saw that it was too much, he had to agree. Needless to say, Kim Son Claw was beaten and bruised by Diep Man with a feather broom :v. Ip Man thus became a support for everyone in Foshan. The next development of the film is when the Japanese invade China (1937). Diep family is sealed, Ip Man and his family have to move to a shabby wooden house in a small alley. It was a difficult time for the Chinese people, and Ip Man had to apply for a job at a coal mine. Here he met again martial artist Lam (like a junior). This coal mine is managed by the Japanese army, led by General Miura. This guy is a genuine master, often organizes martial arts to find a master. Martial Artist Lam and Master Liao were also killed because of that. Unable to stand it, Ip Man went there and asked to fight 10 Japanese boxers, 10 of which ended up being fed bran. Miura stood on witness, so she decided to invite Ip Man to compete. It is also the end of the movie: a great showdown between Ip Man and Miura. At the end of the movie, Ip Man won in the applause of his compatriots, but was hit by a bullet due to a sneak shot (but did not die). That is the end of the content of part 1, the last few images are preparing for part 2.'
    },
    {
        id: 25,
        movieName: 'Bizarre temple 2',
        tv: 'tv',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '108',
        category: 'Comedy horror',
        author: 'Phontharis Chotkijsadarsopon',
        actor: 'Phiravich Attachitsataporn, Timethai Plangsilp, Paisarnkulwong Vachiravit',
        img: 'http://img-zlr1.tv360.vn/image1/2023/02/20/15/1676883185706/0b7f8730f4b6_360_540.jpg',
        description: 'The content of Bizarre Temple 2 is the continuation of Pee Nak 1, two young monks Balloon (Aim Aue) and First (James Bhuripat) after living at the temple for a while, have cooked the intention to return to the world to have a good life. Normal. However, with the temple is curse they could not have a peaceful life, always being harassed by ghosts trying to kill them, making them scared and returning to the temple to find shelter and hide. This part 2 is widely appreciated by the audience than part 1 because it is much more humorous, attractive and worth watching. In particular, the group of friends in the temple has the presence of Korean boy Min Jun (Mean Phiravich) - a KPOP trainee who came to ordination to pray for good luck. Both Ballon, First and Min Jun constantly fall into tricky situations, chasing ghosts and creating difficult moments that are both tragic and funny.'
    },
    {
        id: 26,
        movieName: 'Black Adam',
        tv: 'tv',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '199',
        category: 'Action Horro',
        author: 'Jaume Collet-Serra',
        actor: 'Dwayne Johnson, Aldis Hodge, Noah Centineo, Sarah Shahi, Marwan Kenzari, Quintessa Swindell, Bodhi Sabongui, Pierce Brosnan',
        img: 'https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
        description: 'The film tells the story of Ancient Kahndaq, a city rife with oppression under the dictatorial reign of the Anglo-Kot king. However, when the superhero known as Teth-Adam (Dwayne the Rock Johnson) arose, slaughtering the Anglo-kot dynasty, he was sealed in a 5,000-year-old tomb. But when a team of modern archaeologists infiltrate the tomb in search of the mighty Sabbac crown, Teth-Adam is once again awakened. The government, fearing Black Adam is supernatural powers, contacted Carter Hall/Hawkman to assist in his capture. Hawkman has the support of the American Justice Association including Kent Nelson/Doctor Fate, Maxine Hunkel/Cyclone, and Albert Al Rothstein/Atom Smasher. From here, Black Adam, even though he does not want to, still has to participate in solving the chaos related to Sabbac is crown of power as well as starting his journey to find the true meaning of his existence, how to use Shazam is power. which he was given to protect Khandaq instead of ruling it.'
    },
    {
        id: 27,
        movieName: 'Jurassic World',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '230',
        tv: 'tv',
        category: 'Science Fiction',
        author: 'Colin Trevorrow',
        actor: 'Chris Pratt, Bryce Dallas Howard, Vincent D Onofrio, Jake Johnson, Nick Robinson, Ty Simpkins, B. D. Wong, Irrfan Khan, Omar Sy, Judy Greer',
        img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/679/files/2022/06/nima-neemz-nakhshab-dominion-final-scaled.jpg',
        description: 'Twenty-two years after the Jurassic Park incident, the dinosaur display park was cloned, a new park called Dinosaur World is now operational on the same island. Brothers Zach (Nick Robinson) and Gray (Ty Simpkins) are sent to the island to visit their aunt. Claire Dearing (Bryce Dallas Howard), the park is operations manager. Claire is assistant oversees them, as Claire is too busy convincing the corporation to fund a new attraction, a genetically engineered hybrid dinosaur called Indominus rex. This dinosaur had the DNA of several other predatory dinosaurs along with present-day animals; scientist Henry Wu (B. D. Wong) kept secret about the composition of this species. Owen Grady (Chris Pratt) trains the park is four Velociraptor: Blue, Charlie, Delta and Echo, who consider him their leader. Vic Hoskins (Vincent D Onofrio), head of InGen is security unit, believes that raptors can be trained to fight on the battlefield, but Owen disagrees with this. Park owner Simon Masrani (Irrfan Khan) asks Owen to assess Indominus is captivity before opening. Owen warns Claire that Indominus is extremely dangerous because it must not come into contact with other species. Owen and Claire discover the Indominus has escaped when they see scratches on the wall. Owen and two other staff members went into the enclosure to examine the scratches, but the Indominus ambushed them by fooling the humans into thinking it had escaped. Only Owen survived when the Indominus fled deep into the island. Masrani sends the Property Control Unit to capture the dinosaur alive, but when it kills most of the team, Claire orders the island to be evacuated. Zach and Gray, having sneaked into the park, ignored the evacuation orders and entered the restricted area in the gyrosphere. The Indominus attacked the gyrosphere but they managed to escape. They find the original Jurassic Park visitor center, and after fixing the old jeep, Zach and Gray drive it back to the park. Owen and Claire track them down after escaping the Indominus. Indominus continued to wreak havoc, killing several Apatosauruses and entering the pterosaur enclosure. Masrani and two soldiers chase Indominus by helicopter, but the encounter with the pterosaur causes the helicopter to crash and kill everyone on board. Zach and Gray return to the park when the pterosaurs begin to attack. They found Owen and Claire while the soldiers were shooting down the pterosaurs.'
    },
    {
        id: 28,
        movieName: 'Morbius',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '240',
        tv: 'tv',
        category: 'Science Fiction',
        author: 'Daniel Espinosa',
        actor: 'Jared Leto, Ryan Gosling, Matt Smith, Adria Arjona, Jared Harris, Roksana Węgiel, Al Madrigal, Tyrese Gibson',
        img: 'https://bloganchoi.com/wp-content/uploads/2022/03/ma-ca-1.jpg',
        description: 'Morbius story revolves around doctor Michael Morbius (Jared Leto) who must learn to live with a rare blood disease. To survive, Morbius combined his DNA with the DNA of vampire bats. The fusion gave him super speed, super strength, echolocation. On a train, Morbius killed mercenaries after being transformed into a living vampire. Agents Rodriguez (Al Madrigal) and Stroud (Tyrese Gibson) have been following him ever since. In addition, after turning Morbius secret, Loxias Crown (Matt Smith), Morbius best friend became his greatest enemy, turning himself into a vampire according to Morbius formula because he believed that killing was the way so that we can no longer be controlled by death. Loxias blackening not only threatens Morbius life, but also challenges what ties him to the rare disease.'
    },
    {
        id: 29,
        movieName: 'Peninsula',
        tv: 'tv',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '222',
        category: 'Horror action',
        author: 'Yeon Sang-ho',
        actor: 'Kang Dong-won, Lee Jung-hyun, Kim Do-yoon, Lee Re',
        img: 'https://cdn02.ticketbox.vn/poster/0c62bf1c-c5bb-11ea-b228-0242ac110006',
        description: 'The film is set in an Asian country devastated four years after the zombie epidemic. Former soldier Jung Seok (Kang Dong Won) returns to the peninsula to perform a rescue mission because of a handsome reward of $ 2.5 million. Here, he and his teammates face the metamorphosed brigade and bloodthirsty zombies. Caught between the bloodthirsty zombies and a group of soldiers who have gone mad and become more dangerous than ever, Jung Seok and the survivors must find a way to escape from the peninsula before it is too late. The difference from previous zombie movies is the battles in the post-apocalyptic city. The movie is pacing is also very fast, the scale is very large, and includes action scenes that are not limited in space like before.'
    },
    {
        id: 30,
        movieName: 'Shang-Chi and the Legend of the Ten Rings',
        tv: 'tv',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '233',
        category: 'Science Fiction',
        author: 'Destin Daniel Cretton',
        actor: 'Liu Si Mu, Awkwafina, Truong Mong Nhi, Tran Phap Lai, Florian Munteanu, Huynh Khai Toan, Duong Tu Quynh, Ben Kingsley, Leung Chiu Wai',
        img: 'https://boxofficevietnam.com/wp-content/uploads/2021/11/607e44854e1ae424397772.jpeg',
        description: 'Shang Chi is a young man who works as a valet for a luxury hotel with his best friend Katy. During a bus ride to work, the two encountered a group of strangers with the aim of stealing a memorabilia necklace given to him by his late mother. After that incident, Shang Chi learned that bad people were plotting to harm her long-lost sister, so Anh and Katy decided to immediately fly to Macau to protect her.'
    },
    {
        id: 31,
        movieName: 'Bullet Train',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '244',
        tv: 'tv',
        category: 'Action comedy',
        author: 'David Leitch',
        actor: 'Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry, Andrew Koji, Hiroyuki Sanada, Michael Shannon, Bad Bunny, Sandra Bullock',
        img: 'https://rapchieuphim.com/photos/8925/bullet-train.jpeg',
        description: 'Ladybug is a skilled assassin who just returned from retirement. He receives a mission from assassin Maria Beetle to recover a suitcase on a bullet train in Japan. Thinking this would be an easy mission, a series of events occurred. Ladybug has to face a multitude of different forces on the same train targeting the other suitcase. His opponents are Lemon, Kimura, Hornet, Prince and Tangerine, respectively. Everyone has their own plots and ways of operating that lead to an extremely confusing situation.'
    },
    {
        id: 32,
        movieName: 'Black Widow',
        category: 'Action comedy',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '255',
        tv: 'tv',
        author: 'Cate Shortland',
        actor: 'Scarlett Johansson, Florence Pugh, Cảng David, OT Fagbenle, Olga Kurylenko, William Hurt, Ray Winstone, Rachel Weisz',
        img: 'https://metiz.vn/media/poster_film/131313.jpg',
        description: 'Black Widow is set right after Captain America: Civil War. At this time, the superhero group Avengers was split in two because of ideological conflicts. Belonging to the half violator of the Sokivia treaty, convicted and hunted by the government, super-spy Natasha Romanoff is forced to remain anonymous. However, there is still something else that is also stalking her Black Widow (2021) movie poster. The bloody past that Black Widow thought she had abandoned now suddenly comes to life. Natasha returns to Budapest to seek help from her sister Yelena (Florence Pugh) to find her parents (David Harbor and Rachel Weisz) because they are the only ones who know the truth. Family is the message that runs through Black Widow. Film nerds may find the similarity amusing and amusing as it was released shortly after another family movie, Fast and Furious 9. Quite amusingly, Dominic Toreto is family catchphrase is being caught on the internet. photography everywhere. To be fair, both director Cate Shortland and writers Eric Pearson, Jac Schaeffer and Ned Benson did their best to perfect this central aspect.'
    },
    {
        id: 33,
        movieName: 'Guillermo del Toro is Pinocchio',
        category: 'Cartoon',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '211',
        author: 'Guillermo del Toro',
        actor: 'Ewan McGregor, David Bradley, Gregory Mann, Finn Wolfhard, Cate Blanchett, John Turturro, Ron Perlman, Tim Blake Nelson, Burn Gorman, Christoph Waltz, Tilda Swinton',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWtQk96XmbvKZYcP4bGsRtMF9HRLWNhSzgdrACIKxBSPwNa-9XciGfgDSBmzVFurQZM&usqp=CAU',
        description: 'Carlo Collodi is famous fairy tale is told in a dark and puzzling way about a wooden puppet who has a life and dreams of becoming a real human boy set in the 1930 is. Italian Fascist period. When Pinocchio becomes a real person, he is not a good boy, but becomes a boy who causes mischief and perversion. But at the heart of the film, Guillermo del Toro is Pinocchio is a story of love and disobedience as Pinocchio struggles to live up to his father is wishes.'
    },
    {
        id: 34,
        movieName: 'Sing 2',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '299',
        category: 'Cartoon',
        author: 'Garth Jennings',
        actor: 'Matthew McConaughey, Reese Witherspoon, Scarlett Johansson, Taron Egerton, Tori Kelly, Nick Kroll, Garth Jennings, Bobby Cannavale, Halsey, Nick Offerman, Letitia Wright, Pharrell Williams, Eric André, Chelsea Peretti, Bono',
        img: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/p/o/poster_sing_2_1_1_.jpg',
        description: 'Set after the events of the previous film, the film follows Buster Moon and his group of colleagues towards a concert in Redshore City. To do that, the group must find a way to invite rock star Clay Calloway to perform with them, and also have to make preparations ahead of time to deal with all the tricks. media mogul Jimmy Crystal.'
    },
    {
        id: 35,
        movieName: 'Drifting home',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '310',
        category: 'Cartoon',
        author: '雨を告げる漂流団地',
        actor: 'Tamura Mutsumi, Seto Asami, Murase Ayumu, Yamashita Daiki, Kobayashi Yumiko, Minase Inori, Hanazawa Kana, Mizuki Nana, Shimada Bin',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROia8FwtJyJwJWkZ6ttH1zUQgl6u0UjatytUl0lQ7aWa31Jd3WqeD-Y8t-wCqLUmQ17GE&usqp=CAU',
        description: 'Raised as siblings, Kosuke and Natsume have been friends since childhood, but their relationship began to strain in sixth grade after Kosuke Yasutsugu is grandfather passed away. One day during summer vacation, they visit a residential complex that is scheduled to be demolished, and is rumored to be haunted. Growing up there, this is where a lot of their memories are kept. There, Kosuke asks if Natsume knows about the mysterious Noppo. While playing, they suddenly get caught up in a mysterious phenomenon. When they woke up, they saw an ocean before their eyes while the living quarters had drifted into a mysterious sea. They cooperate with each other to try to survive.'
    },
    {
        id: 36,
        movieName: 'Onward',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '320',
        category: 'Cartoon',
        author: 'Dan Scanlon',
        actor: 'Tom Holland, Chris Pratt, Julia Louis-Dreyfus, Octavia Spencer',
        img: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/o/n/onward.jpg',
        description: 'Onward is set in a wonderland, where brothers Barley and Ian are living with their mother. However, over time, magic has gradually disappeared from this land and has been replaced by modern technology. Review ONWARD: Entertaining, extremely emotional, but the plot is still too safe to see the beginning and know the end. One day, when both brothers were over 16 years old, their mother gave them a gift from their late father. The book and magic wand help them revive their father within 24 hours. The two set out to follow the lead of the ancient map to search for the remaining magic in the outside world, with the desire to meet their father again. Rereading the list of things he would always wanted to do with his father, Ian realized that Barley had been a father all his life, and went back to make amends. Barley discovers the gem inside a historic fountain and retrieves it, inadvertently activating the curse Corey spoke of turning the high school into an artificial dragon bent over claiming the gem. Ian confronts the man-made dragon, but his staff is knocked overboard; he reformed it from an explosion and continued the fight. Corey flies while carrying laurel, who has inserted a magical sword into the artificial dragon is heart, buying Ian is time to cast visitation magic, and completely reforming Wilden is body. Ian sent Barley forward to say goodbye to Wilden, and held the artificial dragon long enough for Laurel to destroy it. After Wilden disappeared, Barley told Ian that their father was proud of him and the brothers hugged. Ian is confidence and casting abilities improve and he surprises Barley by painting his new car, Guinevere 2. Corey reopens his pub to its original spirit, attracting customers with stories of past adventures, and Ian and Barley continue their search.'
    },
    {
        id: 37,
        movieName: 'Frozen II',
        category: 'Cartoon',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '111',
        author: 'Jennifer Lee',
        actor: 'Idina Menzel, Kristen Bell, Jonathan Groff, Josh Gad',
        img: 'http://khenphim.com/wp-content/uploads/2019/11/frozen-2-1-poster.jpg',
        description: 'After the events of the previous film, Queen Elsa continues to rule the kingdom of Arendelle with her sister, Princess Anna. At this moment, Elsa suddenly realized that there was a sound that always followed her and echoed in her ears. After the autumn holidays, Elsa sneaked out of the palace to follow the inviting sound and accidentally awakened four nature spirits: earth, water, fire and wind. These spirits rebelled and destroyed Arendelle is village, forcing everyone to evacuate to higher ground. Elsa had to tell Anna the truth, then Thach Yao came and told her that the kingdom is past was too dark and needed to be resolved or else he could not see the future. Elsa, Anna, Kristoff, the snowman Olaf, and the reindeer Sven must embark on a new journey deep into the woods, beyond the borders of their homeland of Arendelle to uncover a perennial mystery in their kingdoms. . Inside the magical mist is the land of the Northuldra people who worship and use what nature has to offer. The Elsa sisters discovered the truth that their mother was a Northuldra and once protected their father during the conflict between the Northuldra people and the Arendelle army. Elsa and Anna leave Kristoff behind with the Northuldra and decide to head North, where the sound invites. The sisters found their parents shipwreck from the Black Sea here. What needs to be done is to find the source of Elsa is magic, but Elsa decides to force Anna and Olaf back and she will continue to cross the Black Sea towards Ahtohallan - where the North awaits her. Anna and Olaf crash and drift into a cave, and together they find a way out. At this time, Elsa tamed a magic water horse and set sail with it, she followed the call in the ice mountain and finally called for four souls to merge, herself being the fifth soul - the bridge between humanity and humanity. species and nature spirits, and she also learns the cause of the conflict but is different from her father is account of the grandfather.'
    },
    {
        id: 38,
        movieName: 'The Addams Family',
        category: 'Cartoon',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '122',
        author: 'Conrad Vernon',
        actor: 'Oscar Isaac, Charlize Theron, Chloë Grace Moretz, Finn Wolfhard, Nick Kroll, Snoop Dogg, Bette Midler, Allison Janney',
        img: 'https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_-_addams_family_gia_dinh_addams_1_1_.jpg',
        description: 'The story revolves around a family extremely strange and different from humans. They like dark, dusty things, eat disgusting food, and the way they treat people around them is completely different from the norm. That makes this family suffer a lot of discrimination from the people around, even though they have never done anything bad or harmed anyone. The Addams Family - The Addams family began when the couple Gomez and Morticia Addams decided to leave their village to find a land to settle down. The decision was made after they were attacked by angry villagers during their own wedding. The place they decided to call "home" was an abandoned mansion in the state of New Jersey. Here, they had two children, Pugsley and Wednesday Addams, the whole family lived happily together and completely isolated from the human world.'
    },
    {
        id: 39,
        movieName: 'Toy Story 4',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '133',
        category: 'Cartoon',
        author: 'Josh Cooley',
        actor: 'Tom Hanks, Tim Allen, Annie Potts, Tony Hale, Keegan-Michael Key, Jordan Peele, Madeleine McGraw, Christina Hendricks, Keanu Reeves, Ally Maki, Jay Hernandez, Lori Alan, Joan Cusack',
        img: 'https://toomva.com/images/videos/2022/11/toy-story-4-2019-1669746716.jpeg',
        description: 'Toy Story (Toy Story) is an animated film revolving around a group of toys that feel and act like humans, the film tells the story of two main characters including cowboy Woody and space policeman Buzz Lightyear. The story of this couple has become one of the most beloved cartoon titles of all time. With a touching and memorable ending in part 3. Toy Story 4 is a movie full of emotions for viewers, it can make you cry, especially the little boys and girls who have already lost their lives. used to love this animated series. If you thought the ending in Toy Story 3 was great, then watch Toy Story 4 to feel an even more complete and perfect ending. Toy Story 4 continues the journey of toys after breaking up with Andy, now Woody and friends belong to little Bonnie. One day, Boonie creates a new toy for herself called Forky and Woody is task is to ensure the safety of this new toy.'
    },
    {
        id: 40,
        movieName: 'Moana',
        category: 'Cartoon',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '291',
        author: 'Ron Clements',
        actor: 'Auli i Cravalho, Dwayne Johnson, Rachel House, Temuera Morrison, Jemaine Clement, Nicole Scherzinger, Alan Tudyk',
        img: 'https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_0403-1_1024x1024@2x.jpg?v=1662135556',
        description: 'A millennium later, Moana Waialiki, the daughter and heiress of an island chief on the small Polynesian island of Motunui, discovered the heart of Te Fiti while collecting seashells at the beach. At that time, she was still a child. Her father, the head of Tui, insisted the island still provided everything the villagers needed but when fish became scarce, coconuts began to spoil, and the flora on the island began to die, Moana suggested. Go beyond the reef to find more fish. Tui angrily denied her request, as sailing beyond the reef was forbidden. Moana is mother Sina confessed that Tui is afraid of the ocean because he lost his best friend when he tried to sail his boat across the reef. Moana is grandmother Tala saw Moana on the beach after a failed attempt to sail across the reef and showed Moana a secret cave hidden behind a waterfall. Inside is a fleet of sailboats, revealing that the island is ancestors once explored the sea. Tala gives Moana Te Fiti is heart and shows her the darkness caused by Maui is theft that now ravages the island. Tala falls ill and is dying telling Moana to set sail. Moana sets out in search of Maui with the rooster Heihei that was accidentally stowed on the boat. A stingray implies Tala is reincarnation following Moana. Moana follows a constellation that looks like Maui is hook, but a wave lightly hits the boat and knocks her out, knocking her unconscious. The next morning, she wakes up on the small island where Maui resides. Maui distracts Moana by bragging about her feat. Then trap her in a cave and steal her boat. After escaping the cave, Moana tries to convince Maui to return the heart to Te Fiti but Maui refuses for fear that other creatures will kill her to steal it.'
    },
    {
        id: 41,
        movieName: 'Violent Night',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '118',
        upcoming: 'upcoming',
        category: 'Science Fiction',
        author: 'Tommy Wirkola',
        actor: 'David Harbour, John Leguizamo, Alex Hassell, Alexis Louder, Beverly D Angelo',
        img: 'https://alternativemovieposters.com/wp-content/uploads/2022/11/Bryan-Johnson_Violent-Night.jpg',
        description: 'In Greenwich, Connecticut, Jason Lightstone, his estranged wife Linda, and their 7-year-old daughter Trudy visit his mother Gertrude is mansion to celebrate Christmas with his sister Alva, her new boyfriend and wannabe-action star Morgan Steel, and Alva is online streamer son Bertrude. Finding an old walkie-talkie for Trudy to "talk to Santa", Jason and Linda overhear her only wish: to become a family again. Drunkenly delivering gifts, Santa Claus arrives at the Lightstone estate where the caterers reveal themselves to be mercenaries with Christmas-themed codenames. Led by Mr. Scrooge, they slaughter the staff and take the family hostage. Santa is discovered by one of the henchmen, whose gunfire scares away the reindeer, and they fight until Santa knocks him out of a window to his death. Stranded, Santa decides to save Trudy and her family from Scrooge, who demands the $300 million in cash from the mansion is vault. Santa kills another henchman and takes his radio, coming across Trudy is channel, and finds the mercenaries on his magical naughty list. When Trudy is walkie-talkie is discovered, Jason tells their captors that she is simply playing make-believe and declares that Santa is not real, causing her to run and hide in the attic. Santa reassures Trudy over the radio, revealing that he was once Nikamund the Red, a bloodthirsty Viking warrior and finds comfort in his 1,100 years of marriage to Mrs. Claus. Mr. Scrooge is henchman Krampus forces the family to present their gifts to Gertrude, who is surprised by a card from Jason. Wounded, Santa is captured by Scrooge who bears a childhood grudge against Christmas. Santa is knowledge of their real identities convinces henchmen Gingerbread and Candy Cane that he is real, and he uses his magic to escape through the chimney, though they burn his magic sack. Gertrude is private kill squad led by Commander Thorp arrives, but are in league with Scrooge and kill Morgan when he tries to escape. Finding the vault empty, Scrooge threatens Linda and Jason confesses that he stole the money and was planning to flee with his wife and daughter which he explained in his card to his mother. He reveals the money hidden in a nativity scene outside and Gertrude forgives his treachery as the secret Lightstone rite of passage (having stolen her company from her grandfather), choosing him as her heir.'
    },
    {
        id: 42,
        movieName: 'Shotgun Wedding',
	    upcoming: 'upcoming',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '281',
        category: 'Science Fiction',
        author: 'Jason Moore',
        actor: 'Jennifer Lopez, Josh Duhamel, Jennifer Coolidge, Sônia Braga, Cheech Marin, Callie Hernandez, Desmin Borges, D Arcy Carden, Lenny Kravitz',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyGV7yQMaCfIALhRHApU_XWK1FNoCV5eQXDUmiT3HvbJDWyWWoIDWJgoVRnrsmLaZ1cQXPkeuYLfOt9-XSLiNuQYwqxIEYUumZrKtnJErDGDf4oKN5k54b6uaPUp1jGNaQ7wbDF_qM1px5MqXw1HIl0mCsfZo0hFXmM8HyKCqQchrUfveLxR0L2I5t/s720/',
        description: 'Tom, Darcy and their families gather for an ultimate destination wedding on a private island in the Philippines. Just as the couple are away arguing about the wedding, their guests are taken hostage. The pirates demand $45 million dollars from Darcy is wealthy father Robert. He refuses to pay until he is assured that Darcy is alive. Darcy and Tom are captured apart from the wedding party, but manage to escape their captors, killing one of the pirates. As they try to evade recapture, Darcy and Tom air their respective doubts about the wedding. Cornered hiding in a vault beneath the manager is office, Tom surrenders to them so Darcy can stay hidden. When he rejoins the rest of the wedding party, Tom reveals that Darcy is ex-fiancé Sean had hired the pirates. With his plot exposed, Sean goes to hunt down Darcy, taking Robert is girlfriend Harriet as a hostage. Meanwhile, Darcy joins Tom and the rest at the pool where she and Tom admit that they still want to marry each other. The wedding party members realize that Harriet was in on the plot with Sean. Tom asks the two pirates standing guard to let them complete the wedding ceremony, and Robert says that he will release the money if they let them get married. As the guests sing I will Be, Tom and Darcy rush the pirates, and Darcy takes a grenade off of one. One pirate surrenders; the other runs off, then begins firing on the venue. Tom is mother Carol grabs a weapon from the ground and returns fire. Darcy throws the grenade in the air so Tom can bat it at the pirate, who is blown up in the explosion (which also sets off the fireworks that had been staged for the wedding celebration). As the wedding party goes to safety, Darcy and Tom race to get help, but are confronted on the dock by Sean. Tom fights him, then Tom and Darcy escape in a boat. Harriett tries to stop them in a helicopter. Sean, who had been dragged by a rope with the boat, climbs aboard and fights Tom again while Darcy drives the boat. A parasail is released, taking Tom and Sean into the air. Tom zips down the line to the boat deck. Tom and Darcy cut the line, sending the parasail loose into the helicopter is rotors, which kills both Sean and Harriet. Back on the beach, as authorities take the remaining pirates into custody, Tom and Darcy get married.'
    },
    {
        id: 43,
        movieName: 'Cirkus',
	    upcoming: 'upcoming',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '170',
        category: 'Science Fiction',
        author: 'Rohit Shetty',
        actor: 'Ranveer Singh, Pooja Hegde, Jacqueline Fernandez, Varun Sharma',
        img: 'https://m.media-amazon.com/images/M/MV5BNzViMzYyNzYtZDQ5ZS00YzkwLWI4ZWUtYzljZWEyNTdjYmQ2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        description: 'In 1944, Dr. Roy Jamnadas (Murali Sharma), who is working on the theory of nature vs nurture, separates two sets of identical twins he finds at the doorstep of the orphanage he runs and gives them up for adoption to two different families, based in two different cities. One pair is given to a couple in Ooty and the other pair to a couple in Bangalore, and both the couples name them Roy and Joy, after Dr. Roy and his own adoptive brother Joy. Roy 1 (Ranveer Singh) and Joy 1 (Varun Sharma) is father runs a circus and after his death, they both take up the responsibility of running the circus. Roy 2 and Joy 2s father is a rich industrialist. Roy 1 has a strange connection with electricity and electric currents do not affect him. He uses this ability to show tricks at the circus and becomes famously known as Electric Man. Elsewhere, Roy 2 receives electric shocks whenever Roy 1 comes into contact with electricity. The story then moves forward 30 years. Roy 1 is wife, Mala (Pooja Hegde), cannot conceive and wishes to adopt a child from the Jamnadas Orphanage, but Roy 1 is against the idea. Roy 2 is in love with Bindu but her father Rai Bahadur is sceptical about him as he had seen Roy 1 with Mala in Ooty and had mistaken him for Roy 2, thinking that he is cheating on Bindu. Roy 2 and Joy 2 come to Ooty to buy a tea estate and there is a lot of confusion and misunderstanding as people mistake them for the other pair of twins. Three robbers - Momo, Mango and Chikki are after them to rob their money. They back off when Roy 2 gives them electric shocks and their boss, Polson Dada later comes to take revenge. They also come across Nagmani, the shady cab driver and Bagheera, the dacoit turned hotel owner. Roy 2 thinks they are all part of a huge criminal gang who want to rob them, and when they happen to come across Mala, they think that she is the leader of the gang. Roy 1 decides to gift a diamond necklace to Mala but the jeweler mistakenly gives it to Roy 2, creating further confusion. Moreover, Bindu is father is now convinced that Roy 2 is married to Mala. On hearing this, Bindu threatens to end her relationship with him, not knowing that Mala is actually Roy 1 is wife.'
    },
    {
        id: 44,
        movieName: 'Confess, Fletch',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '188',
	upcoming: 'upcoming',
        category: 'Science Fiction',
        author: 'Greg Mottola',
        actor: 'Jon Hamm, Marcia Gay Harden, Kyle MacLachlan, Roy Wood Jr., John Slattery',
        img: 'https://photo2.tinhte.vn/data/attachment-files/2022/11/6201819_thu-toi-di.jpg',
        description: 'Irwin Maurice Fletch Fletcher is sent to Boston from Italy by his girlfriend Angela to recover her father’s multimillion-dollar art collection. The paintings were stolen and are in the possession of an American art dealer named Ronald Horan. Angela’s father is an Italian billionaire count who was kidnapped by a mob demanding his paintings as ransom. As Fletch arrives in a rented town house in Boston, he finds a dead woman, subsequently identified as barista Laurel Goodwin. Despite being the one who called the police, Fletch becomes the prime suspect in Goodwin is murder. Sergeant Inspector Monroe and Junior Detective Griz of the Boston Police Department begin tailing Fletch. Fletch meets with Horan under a fake name in an attempt to locate the paintings. Fletch learns from his neighbor Eve that Owen, the town house owner, has a history of violence and drug abuse and an ex-wife named Tatiana, who used to be his business partner. Fletch meets with Tatiana, again using a fake name, and suspects that she is the killer. Meanwhile, the Countess, Angela’s stepmother, invites herself to stay with Fletch. Angela is not happy with this development; she suspects that the Countess and her brother kidnapped the Count. Angela arrives in Boston and initially appears to be friendly with the Countess. At dinner that night, Fletch, the Countess, and Angela are visited by Owen, Tatiana, and Eve. Laura Goodwin’s boyfriend arrives and tries to kill Fletch. When the boyfriend is distracted by Eve is dog, Fletch snatches his gun and learns that Angela knows and was in contact with Owen. Angela abruptly leaves in the middle of the evening. Fletch follows Angela to a meeting with Horan on his sailboat. Fletch assumes that Angela stole the paintings and transferred them to Horan to sell. Horan reveals that he killed Laurel Goodwin and framed Fletch to eliminate him from the painting transaction. Horan planned to deceive Angela and pay off his debts by selling the Count is art collection. Horan pulls a gun and tries to kill Fletch, but is shot dead by Griz. The Count, who faked his kidnapping with Fletch is help as a test of his wife and daughter, returns and persuades Fletch to keep the paintings. Fletch, from an undisclosed location in Latin America, sends paintings to Eve, his previous boss, and two street artists, and a large check to the boyfriend of Laurel Goodwin.'
    },
    {
        id: 45,
        movieName: 'Cruella',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '148',
	    upcoming: 'upcoming',
        category: 'Science Fiction',
        author: 'Craig Gillespie',
        actor: 'Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser, Emily Beecham, Kirby Howell-Baptiste, Mark Strong',
        img: 'https://pbs.twimg.com/media/EuWrukNUUAgqKGi?format=jpg&name=medium',
        description: 'The film tells the youth of the character Cruella De Vil - the villain in the novel 101 Dalmatians and the Disney animated film of the same name. Before becoming as crazy and cruel as in 101 Dalmatians, Cruella was once a young girl with an honest nature and a strong passion for the fashion industry. Cruella has a very pitiful past when she was abandoned by her biological mother, suffered from school violence, and was orphaned at a very young age. Watch the movie to see how a street kid who steals can become a phoenix in the fashion world.'
    },
    {
        id: 46,
        movieName: 'Lyle, Lyle, Crocodile',
	    upcoming: 'upcoming',
        category: 'Science Fiction',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '257',
        author: 'Will Speck',
        actor: 'Javier Bardem, Winslow Fegley, Constance Wu, Scoot McNairy, Brett Gelman, Shawn Mendes',
        img: 'https://thegioidienanh.vn/stores/news_dataimages/anhvu/112022/04/20/0818_01.jpg?rt=20221104212558',
        description: 'When the Primm family moves to New York City, young son Josh has trouble adjusting to school and new friends. Everything changes when the boy discovers Lyle - a crocodile guy who loves bathing, caviar and live music in his attic. The two quickly became friends. However, when Lyle is life is threatened by their neighbor Grumps, the Primm family is forced to team up with Lyle is former boss Hector P. Valenti to show the world the value of intimacy and the magic of a man. Crocodile can sing.'
    },
    {
        id: 47,
        movieName: 'We are the Millers',
	    upcoming: 'upcoming',
        category: 'Science Fiction',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '97',
        author: 'Rawson M. Thurber',
        actor: 'Jennifer Aniston, Jason Sudeikis, Emma Roberts, Nick Offerman, Kathryn Hahn, Ed Helms',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVx8eAylWYkHggeMPYy5v2oVUinEL-HYZh4JLpRsdjypBwGfGG0nPvnLZ9sakU6mlz4w&usqp=CAU',
        description: 'The story of We are The Millers revolves around a drug dealer (Jason Sudeikis) who has to find a way to cross the US-Mexico border with 1,500 kg of drugs. In order to legitimize everything at the border gate, no doubt he planned to set up a fake family to pretend to travel in a car with banned goods. A ballerina (Jennifer Aniston) is recruited by him as his wife, a homeless child (Emma Roberts) and an English neighborhood boy (Will Poulter) are recruited as his daughter and son. The quartet of mixed families begins the journey of crying and laughing.'
    },
    {
        id: 48,
        movieName: 'The Sleepover',
	    upcoming: 'upcoming',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '98',
        category: 'Science Fiction',
        author: 'Trish Sie',
        actor: 'Sadie Stanley, Maxwell Simkins, Ken Marino, Cree Cicchino, Lucas Jaye, Karla Souza, Enuka Okuma, Erik Griffin, Joe Manganiello, Malin Åkerman',
        img: 'https://m.media-amazon.com/images/M/MV5BZmE1Mjg5ZjgtYjkzYi00OWYxLWEyMDQtYjI3NWE1ZTc3N2Q3XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg',
        description: 'In Boston, Clancy Finch is invited by her crush Travis Schultz to a party at his house. Her brother Kevin is caught dancing in the restroom by some older students who record him and bully him, but Clancy is and Kevin is mother Margot, the lunch monitor, scares them away. The bullies upload a remix video of Kevin dancing and Margot admonishing them to YouTube, where it quickly goes viral, gaining over two million views. Kevin, Clancy, and her friend Mim are picked up by their father Ron, an awkward pastry chef. Clancy asks her parents if she can go to Travis is party and they both say no, leading to her insulting her mother and getting grounded. Later, Kevin is friend Lewis comes over for a sleepover in a tent in the backyard. That night, Clancy and Mim sneak out. On their way to the party, they first scare the boys, causing Lewis to run into the house to pee. While in the bathroom, he notices a man and a woman break into the house, force Ron at gun point and Margot (whom they call "Matilda") to come with them under threat of Ron is death to get their group back together. Margot agrees, removing her necklace as a clueless Ron is brought along. Lewis runs back to the tent and tells the others what happened. Not believing him, the four run back inside until they notice United States Marshals Agent Henry Gibbs sneaking into the house. An intruder, they attack him, tying him to a chair. He tells them Margot was in the Witness Protection Program because she turned in the boss of the crime syndicate she was in, but has been located due to the viral video. In another location, Elise and her associate are briefed on the mission. Also present is Margot is criminal ex-fiancé Leo Bouchot, who had been in the Witness Protection Program before he was found. The kids follow clues Margot left them in the flour and her necklace when she was taken away, leading them to a storage unit, a secret spy center. They take a self-driving spy car to Travis is party. Travis agrees to take them to Downtown Boston in his family is boat, but they are stopped by the U.S. Coast Guard and he has a revoked license.'
    },
    {
        id: 49,
        movieName: 'The Gray Man',
	    movie: 'movie',
        category: 'Science Fiction',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '228',
        author: 'Anthony Russo',
        actor: 'Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Alfre Woodard, Billy Bob Thornton',
        img: 'https://static.metacritic.com/images/products/movies/9/f62b27bb506139ad7bb5ce70fca025b9.jpg',
        description: 'The screenplay is based on the novel of the same name by writer Mark Greaney. Ryan Gosling plays a man sentenced to prison for killing his father to protect his younger brother. Senior CIA official Donald Fitzroy (Billy Bob Thornton) came to him and asked him to join the Sierra project - specializing in sending unknown assassins to destroy targets. In return, the CIA will free you. Gosling is character agrees and goes by the codename Sierra Six.More than 18 years later, in Bangkok, Six and female agent Dani Miranda(Ana de Armas) receive a mission to assassinate a target suspected of revealing national security secrets.Before his death, this guy revealed that he was also an assassin belonging to the Sierra project, operating under the code name Sierra Four.He gives Six an encrypted drive detailing the corrupt behavior of Denny Carmichael(Regé- Jean Page) - a CIA member.Knowing the truth, Six manages to escape Bangkok without accompanying Carmichael is men. He went to Prague and asked Margaret Cahill - a spy in charge of the Sierra project - to extract data. Meanwhile, Carmichael hires Lloyd Hansen (Chris Evans) - a former CIA agent fired for his disorganized and somewhat insane personality - to track down Six.'
    },
    {
        id: 50,
        movieName: 'The Tomorrow War',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '315',
        movie: 'movie',
        category: 'Science Fiction',
        author: 'Chris McKay',
        actor: 'Chris Pratt, Yvonne Strahovski, J. K. Simmons, Betty Gilpin, Sam Richardson, Edwin Hodge',
        img: 'https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
        description: 'This sci-fi film revolves around the main character Dan Forester (Chris Pratt) - a middle school science teacher who is constantly struggling to find new opportunities at work. Forester lives happily with his wife and beautiful, lovely daughter and loves to explore science like his father. However, in his heart he still hates his father because he thinks he has abandoned his mother and son. On Christmas Eve, Dan and his family were watching an exciting football game on the screen when a light flashed. A group of soldiers from that light suddenly appeared with guns. They said that they came from the future (2051), with the purpose of begging for help from the present because 30 years from now humanity will be destroyed by a bloodthirsty alien race. During the recruitment to go to the future to fight monsters, Dan is recruited. So many people go and do not come back, so those who are healthy, both men and women, have to go. He and the others are equipped with a machine on their arm so they can be transported to the future and return to the present after completing the mission 7 days (if they survive). In that future war, Dan also gets to work with his daughter - Colonel Forester (Yvonne Strahovski). His daughter has created a poison that can kill a series of White Thorn monsters, even the fierce female cannot be killed with other poisons. After 7 days, Dan was sent back to the present, unable to save his daughter, the future collapsed and there was no gate to the future. Poison has been mass-produced. At the suggestion of his wife, he, along with his father and some survivors of the trip to the future, fly to Russia in search of a spaceship containing monsters to destroy them.'
    },
    {
        id: 51,
        movieName: 'Eternals',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '318',
        movie: 'movie',
        category: 'Science Fiction',
        author: 'Chloé Zhao',
        actor: 'Gemma Chan, Richard Madden, Kumail Nanjiani, Lia McHugh, Brian Tyree Henry, Lauren Ridloff, Barry Keoghan, Don Lee, Kit Harington, Salma Hayek, Angelina Jolie',
        img: 'https://cinematone.info/public/poster/poster_2108/210819184714_Eternals_bVDhA.jpg',
        description: 'The Eternals content revolves around the Eternal immortal race sent by the Celestials to protect the Earth to protect humanity from the evil Deviant since 5,000 BC. Over the next millennia, Ajak (Salma Hayek), Sersi (Gemma Chan), Ikaris (Richard Madden), Gilgamesh (Ma Dong Seok), Thena (Angelina Jolie), Sprite (Lia McHugh), Makkari (Lauren Ridloff), Druig (Barry Keoghan), Phastos (Brian Tyree Henry) and Kingo (Kumail Nanjiani) together wipe out the enemy. They also create technologies, exploit the land to help people develop. Up to the present time, for some reason, the Eternals members are no longer together. The Hulk/Bruce Banner (Mark Ruffalo) snap that brought half the population back also brought Deviant back to life. Sersi and her boyfriend Dane Whitman (Kit Harington) and Sprite were living in hiding in London (UK) when they were attacked. Ikaris appears in time to rescue, and suggests gathering everyone so they can fight.'
    },
    {
        id: 52,
        movieName: 'Army of the Dead',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '100',
        movie: 'movie',
        category: 'Science Fiction',
        author: 'Zack Snyder',
        actor: 'Dave Bautista, Ella Purnell, Omari Hardwick, Ana de la Reguera, Theo Rossi, Matthias Schweighöfer, Nora Arnezeder, Hiroyuki Sanada, Tig Notaro, Raúl Castillo, Huma Qureshi, Garret Dillahunt',
        img: 'http://phimnhua.com/wp-content/uploads/2021/05/zFFvxtK.jpg',
        description: 'The content of Army Of The Dead begins when a military convoy carrying a secret package from Area 51 has an accident. From within, a super-evolved zombie with superior strength, speed, and intelligence escapes and destroys the entire group of soldiers. It headed to Las Vegas and turned the whole city into a zombie. Some time later, businessman Bly Tanaka (Hiroyuki Sanada) seeks out mercenary Scott Ward (Dave Bautista) to propose a plan to break into Las Vegas and steal $200 million from a safe in a casino. They have almost two days before the US government obliterates the city with a nuclear missile. Las Vegas is now not only overrun with zombies, but also dominated by Alpha - a group of zombies with intelligence and many times stronger than ordinary people. In the face of the hunt of the undead, Scott is team also has to race against time when the rocket launch is pushed up a day early.'
    },
    {
        id: 53,
        movieName: 'The Other Guys',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '181',
        movie: 'movie',
        category: 'Science Fiction',
        author: 'Adam McKay',
        actor: 'Will Ferrell, Mark Wahlberg, Eva Mendes, Michael Keaton, Steve Coogan, Ray Stevenson, Samuel L. Jackson, Dwayne Johnson',
        img: 'https://phimnhua.com/wp-content/uploads/2021/06/MV5BMDlhZDQ5NDUtNDcwMi00MTQ5LTk1Y2UtYjNmMjgzNzNhNzU3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_-270x400.jpg',
        description: 'Terry Hoitz (played by Mark Wahlberg) and Allen Gamble (played by Will Ferrell) are 2 inspectors of the New York police department, but every day they just sit at a desk with boring data entry jobs. In contrast to Allen Gamble who is completely secure and accepts tedious work, Terry Hoitz wants to break out of the current situation. Two police inspectors with two different purposes have to work together on the same team, arguing and fighting all day, making their image become bad in the eyes of their colleagues around. Meanwhile, the police department is star duo and New York City heroes, Inspectors Danson (played by Dwayne Johnson) and Highsmith (Samuel L. Jackson), are at odds in their war against the city. criminal. Their images and achievements are present in most of the mass media, admired and welcomed by the public and even by entertainment stars. Becoming the pride of the New York police department, they also gradually became proud, Danson and Highsmith are also the goals of all police inspectors, including Terry Hoitz. What happens when Danson and Highsmith disappear? What will Terry Hoitz do to entice Allen Gamble to leave the desk to become an action hero? As a movie about the police, the main content is the story of solving the case and indispensable classic action scenes. Two detectives Danson and Highsmith had a show of skillful steering while catching criminals at breathtaking speed on the crowded New York streets. And Terry Hoitz and Allen Gamble, on the other hand, are much more humorous with a spectacular escape on a bright red car, not inferior to the famous car robbery game GTA. The crime-solving action at the end of the movie, the beautiful camera angle combined with the slow motion effect ensures to satisfy the audience who love action movies with the fiery gunfight.'
    },
    {
        id: 54,
        movieName: 'Nobody',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '101',
        movie: 'movie',
        category: 'Science Fiction',
        author: 'Ilya Naishuller',
        actor: 'Bob Odenkirk, Connie Nielsen, RZA, Christopher Lloyd',
        img: 'https://static1.dienanh.net/upload/202202/c664dae6-5e6f-4568-b8cb-902fe6a75408.jpg',
        description: 'In the movie Nobody, Hutch Mansell (Bob Odenkirk) is a middle-aged family breadwinner. One night, he fights with thugs on a bus to protect a young girl, leading to one of them, the younger brother of mafia boss Yulian (Aleksei Serebryakov). The fact that Yulian and his henchmen constantly attack and terrorize the Hutch family. However, the unnamed man possesses a violent past, and the villains are about to pay the price. Nodody is main storyline easily reminds viewers of John Wick (played by Keanu Reeves), a master assassin who just wants to retire in hiding, but encounters the gangsters "who have eyes but ca not see the mountain". In the two film franchises, producer David Leitch brings a humorous but equally philosophical message: Do not look down on your parents, because behind that humble look are long scars that never end. Now they let me see.'
    },
    {
        id: 55,
        movieName: 'Doctor Strange in the Multiverse of Madness',
        movie: 'movie',
        category: 'Science Fiction',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '168',
        author: 'Sam Raimi',
        actor: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, Rachel McAdams',
        img: 'https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg',
        description: 'The film is set several months after the events of Spider-Man: No Way Home. Stephen Strange (Benedict Cumberbatch) returns to his normal life but keeps having strange dreams about a mysterious little girl possessing a source of power he himself never knew existed. One day, while on a superhero mission with his teammate Wong (Benedict Wong), Strange meets America Chavez (Xochitl Gomez) - the girl who often appears in his dreams - being chased by monsters. America says there is a special ability that opens the portal between different dimensions. However, she was not able to master it and was constantly pursued by bad guys, in order to take over this ability. Strange and Wong decided to protect America against forces much stronger than them.'
    },
    {
        id: 56,
        movieName: 'Venom: Let There Be Carnage',
        movie: 'movie',
        category: 'Science Fiction',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '298',
        author: 'Andy Serkis',
        actor: 'Tom Hardy, Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, Woody Harrelson',
        img: 'https://images.vkoolzzz.net/fposter/thumb/movies/ZW1RBNK.jpg',
        description: 'After part one, now Eddie Brock (Tom Hardy) must learn to live with Venom every day as he symbiotically enters his body, inseparable. To restore his career, Eddie tries to find a way to interview the perverted serial killer Cletus Kasady (Woody Harrelson) before he receives the death penalty. However, it turns out that Cletus true identity is Carnage, one of Venom is most dangerous enemies. Carnage is sudden appearance not only threatens Eddie is life, but also challenges what ties him to Venom.'
    },
    {
        id: 57,
        movieName: 'The Mandalorian',
	    home: 'home',
        category: 'Science Fiction',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '489',
        author: 'Jon Favreau',
        actor: 'Pedro Pascal, Carl Weathers, Gina Carano',
        img: 'https://image.mpapis.xyz/poster/nguoi-mandalore-phan-3-11045.jpg',
        description: 'Five years after the fall of the Galactic Empire 1 a bounty hunter Mandalore comes to meet Greef Karga. He accepts a top secret mission on the outpost planet Nevarro from a client with ties to the Empire, instructing him on how to track down and capture a 50-year-old subject. While Client is not concerned with the subject is survival, Dr. Pershing insists it must be alive. The Mandalorian was given a deposit of a single Beskar iron, a metal so precious to his men. He went to a small Mandalore base, where he was forged for a new shoulder armor. Arriving on the planet where the subject was last seen, the Mandalorians are aided by a wet farmer named Kuiil. Tired of the chaos caused by the bounty hunters, Kuiil took him to the location and left. Entering the heavily defended lair, the Mandalorians must team up with the killer droid IG-11 to destroy the camp and capture its target – a Yoda-type child. IG-11 intends to kill the child, the Mandalorian shoots the droid and takes the child alive.'
    },
    {
        id: 58,
        movieName: 'Game of Thrones',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '480',
        home: 'home',
        category: 'Science Fiction',
        author: 'David Benioff',
        actor: 'Isaac Hempstead Wright, James Cosmo, Dean-Charles Chapman, Michael McElhatton, Jacob Anderson',
        img: 'https://cuongphim.com/wp-content/uploads/2019/05/Tro-choi-cuong-quyen-cuong-phim-1-1.jpg',
        description: 'Members of the Night is Watch, an ancient group of people defending the North Wall of Westeros, encounter a supernatural entity known as the White Walker in the forest that was previously considered mythical. Ned Stark (Sean Bean), Warden of the North, is visited at Winterfell by Robert Baratheon (Mark Addy) and invited to serve at the home following the sudden death of Jon Arryn, the previous Hand of the King. His two daughters: Stark Sansa (Turner) and Arya (Williams) accompany him to King is Landing but discover a corrupt city-state is in disarray. The family of Baratheon is bride, Cersei Lannister (Lena Headey), is believed to be behind Arryn is murder. His son Bran (Isaac Hempstead Wright) witnesses Cersei in bed with his brother Jaime (Nikolaj Coster-Waldau), who pushes him out of a tower window, leaving Bran paralyzed. Tyrion Lannister (Dinklage), a dwarf, travels with Ned is illegitimate son Jon Snow (Harrington) to investigate the case of White Walker being denounced by the Night is Watch. Snow stayed with the group. Tyrion is arrested on the orders of Catelyn Stark (Michelle Fairley), who believes he is responsible for Bran is fall, prompting a trial by fighting to secure his release. Tyrion, imprisoned in Wales under the supervision of his sister Catelyn Lysa Arryn (Kate Dickie), enlists Bronn (Jerome Flynn) to fight for him. You bankrupted Arryn is champion selection. When Baratheon is mortally wounded in a suspicious hunting accident, Ned is named Protector of the Realm until Cersei is sadistic son Joffrey (Jack Gleeson) is old enough. However, Ned plans to take down Stannis Baratheon (Stephen Dillane), the king is estranged brother, in his place. Ned is betrayed by councilor Lord Petyr Littlefinger - Baelish (Aidan Gillan) and beheaded on Joffrey is orders. Sansa is captured by the Lannisters as Arya tries to escape. In response, Stark is son Robb (Madden) is named King of Winterfell and rallies the army of the North against the Lannisters. Across the Narrow Sea, the Dothraki lord Khal Drogo (Jason Mamoa) marries Daenerys Targaryen (Clarke). She believes herself to be the true heir to the Iron Throne and plots to attack Westeros. Drogo died after being enchanted by a witch. Daenerys avenged him and hatched three dragon eggs given to her as a wedding gift.'
    },
    {
        id: 59,
        movieName: 'Carnival Row',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '477',
        home: 'home',
        category: 'Science Fiction',
        author: 'René Echevarria',
        actor: 'Orlando Bloom, Cara Delevingne, Simon McBurney, Tamzin Merchant, David Gyasi, Andrew Gower, Karla Crome, Arty Froushan, Indira Varma, Jared Harris, Caroline Ford, Jay Ali, Joanne Whalley, Jamie Harris, Ariyon Bakare',
        img: 'https://static.playpdc.xyz/poster/jpg/Poster-sinh-vat-than-thoai-carnival-row-id_2420_21453004629Jewc.jpg',
        description: 'In Carnival Row, mythical creatures... have fled their war-torn homeland and gather in the city as tensions simmer between residents and a growing immigrant population. There is an investigation into a string of unsolved murders, questions about the frenzy of power, unresolved love, and social adjustments that are eating away at any uneasy peace. which exists.'
    },
    {
        id: 60,
        movieName: 'Wednesday',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '460',
        home: 'home',
        category: 'Science Fiction',
        author: 'Alfred Gough & Miles Millar',
        actor: 'Jenna Ortega, Gwendoline Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J. Ogawa, Christina Ricci, Moosa Mostafa',
        img: 'https://upload.wikimedia.org/wikipedia/vi/6/66/Wednesday_Netflix_series_poster.png',
        description: 'The film begins when Wednesday Addams (Jenna Ortega) takes brutal revenge against those who bullied her brother Pugsley, with a warning that no one but her should bully her brother. This act resulted in her being expelled and her parents, Gomez (Luiz Guzman) and Morticia (Catherine Zeta-Jones) tried to send her to Nevermore Academy, the school they both attended and met before. This. Initially Wednesday protested and planned to escape from there. However, when she witnessed the strange deaths in this town and got caught up in it herself, she decided to stay behind to find out the truth. Since then, she has gradually become more integrated when getting to know new friends here. Through the character Wednesday Addams, the series not only tells a mysterious, supernatural horror story revolving around the suspicious deaths taking place in the town, but also interweaves the school stories of girls and boys. Teenager. Lots of stories about finding one is self, making friends, competitions, clubs, proms at school, love and competition in high school...'
    },
    {
        id: 61,
        movieName: 'Black Panther: Wakanda Forever',
        home: 'home',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '457',
        category: 'Science Fiction',
        author: 'Ryan Coogler',
        actor: 'Letitia Wright, Lupita Nyong o, Danai Gurira, Winston Duke, Dominique Thorne, Florence Kasumba, Michaela Coel, Tenoch Huerta, Martin Freeman, Angela Bassett',
        img: 'http://photos.q00gle.com/storage/files/images-2021/images-movies/09/636e1cd7b31f7.jpg',
        description: 'Black Panther: Wakanda Forever is the second separate movie of the Marvel Cinematic Universe superhero movie franchise about Black Panther. The work opens with a scene where King T Challa is dying of a mysterious illness.Shuri(Letitia Wright) tries to research to restore the elixir of Heart Shaped Grass in the belief that it can save her brother is life. However, her plan fell apart when T Challa breathed her last in a hospital bed before the project was successful.A year later, Queen Ramonda ran Wakanda after the king is death. Other countries conspired to take advantage of T Challa is death to pressure Wakanda to share the vibranium resources. They hire science prodigy Riri Williams (Dominique Thorne) to build a detector for this mineral. However, in the process of tracking the vibranium mines, the CIA accidentally encountered the kingdom of green people. The event led to a new threat to Wakanda and all nations on Earth.'
    },
    {
        id: 62,
        movieName: 'Ghosts of War',
        home: 'home',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '433',
        category: 'Science Fiction',
        author: 'Eric Bress',
        actor: 'Brenton Thwaites, Theo Rossi, Skylar Astin, Kyle Gallner, Alan Ritchson, Billy Zane, Shaun Toub',
        img: 'https://images2.thanhnien.vn/uploaded/caotung/2020_07_09/ghosts-of-war_GJMO.jpg?width=500',
        description: 'Ghosts of War is set in World War 2, in 1944, there are 5 soldiers assigned to guard an abandoned castle. When they came to take over the mansion, the previous group of soldiers hurriedly left without any explanation. Then, no matter what happens, the 5 soldiers gradually realize that in that large palace, there are not only 5 of them. Loud footsteps upstairs, or scorch marks on the carpet, and a host of other bizarre phenomena caused the spirits of the strong men to gradually decline.'
    },
    {
        id: 63,
        movieName: 'House of the Dragon',
        home: 'home',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '425',
        category: 'Science Fiction',
        author: 'Miguel Sapochnik',
        actor: 'Paddy Considine, Matt Smith, Milly Alcock, Emily Carey, Emma D Arcy, Olivia Cooke, Rhys Ifans, Steve Toussaint, Eve Best, Fabien Frankel, Graham McTavish, Sonoya Mizuno',
        img: 'https://bazaarvietnam.vn/wp-content/uploads/2022/08/harper-bazaar-review-phim-gia-toc-rong-house-of-the-dragon-9-e1661231604109.jpg',
        description: 'Opening the film with events at the 101 AC General Assembly in Harrenhal, Viserys was chosen to succeed the Iron Throne. Nine years later, King Viserys I Targaryen decided to choose his eldest daughter Rhaenyra Targaryen to succeed the Iron Throne (since his sons had all died) and made them all swear allegiance to her. Meanwhile, the king is wife, Aemma Arryn, died by cesarean section, and her child died soon after.King Viserys remarried Lady Alicent Hightower, and a close friend of Rhaenyra.Prince Daemon, after being relinquished by his brother as heir, allied himself with Lord Colys, and together recaptured the Stepstones.When the king had a son, the lords advised that the heir should be changed to Prince Aegon because the son was more worthy than the daughter, but King Viserys refused and still chose Rhaenyra as his successor.Daemon returned from his victory in the Stepstones, giving up his crown of the Narrow Sea King, which restored the relationship between the two brothers.But soon after, King Viserys exiled Daemon back to the Vale because he had an illicit relationship with Rhaenyra, wanting to marry Rhaenyra in order to gain power for himself.Viserys also deposed Ser Otto is Hand of the King upon realizing he was manipulating himself for personal gain. Sometime later, Rhaenyra married Ser Laenor, the son of Lord Corlys Velaryon. Ten years later, Rhaenyra and Laenor had three children, Jaecarys, Lucerys and Joffrey. After so many rumors about bloodline, Rhaenyra and her family went to Dragonstone, where the heir was allowed to live when he was chosen to succeed. While living in Essos, Laena Velaryon, Daemon is wife had a difficult time giving birth, and she voluntarily died in Vhagar is fire. After Laena is funeral in Driftmark, Aemond Targaryen was blinded in one eye during a dispute over the dragon Vhagar.When Viserys died, Alicent and Ser Otto defied the king is will, proclaiming Aegon (Alicent is eldest son) to the throne at Dragon is Pit; however was breached by Rhaenys and her dragon Meleys.'
    },
    {
        id: 64,
        movieName: 'The Lord of the Rings: The Rings of Power',
        home: 'home',
        category: 'Science Fiction',
        nation: 'American',
        time: '121 minutes',
        resolution: 'Full HD',
        view: '420',
        author: 'J. R. R. Tolkien',
        actor: 'Elves, Númenór, Harfoot, Tirharad, Dwarves and Others',
        img: 'https://i0.wp.com/cdn.phimbo.info/images/poster-chua-te-nhung-chiec-nhan:-nhung-chiec-nhan-quyen-nang-2022.jpg',
        description: 'Set thousands of years before the events of the Hobbit and The Lord of the Rings, the film is based on the history of Middle-earth by author J. R. R Tolkien. It begins in a period of relative peace and includes all of the great events of the Second Age of Middle-earth: the forging of the Ring of Power, the rise of the Dark Lord Sauron, the fall of the island nation of Númenor and the final alliance between the Elves and the Humans. These events take place thousands of years into Tolkiens original stories but are repeated for the series as a whole.'
    },
]

// Convert array to JSON string
const saveMovieInfo = JSON.stringify(movieInfo);

// Save JSON string to localStorage with key is "movie-info"
localStorage.setItem("movie-info", saveMovieInfo);

// Get JSON string from localStorage with key as "movie-info"
const getMovieInfo = localStorage.getItem("movie-info");

// Convert JSON string to array
const showMovieInfo = JSON.parse(getMovieInfo);

// console.log(showMovieInfo);


for (let i = 0; i < boxHeadingBtn.length; i++) {
    let show = false;
    boxHeadingBtn[0].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[0].style.color = '#fff'
            movieDescription_1.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[0].style.color = '#e7d666'
            movieDescription_1.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[1].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[1].style.color = '#fff'
            movieDescription_2.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[1].style.color = '#e7d666'
            movieDescription_2.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[2].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[2].style.color = '#fff'
            movieDescription_3.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[2].style.color = '#e7d666'
            movieDescription_3.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[3].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[3].style.color = '#fff'
            movieDescription_4.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[3].style.color = '#e7d666'
            movieDescription_4.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[4].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[4].style.color = '#fff'
            movieDescription_5.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[4].style.color = '#e7d666'
            movieDescription_5.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[5].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[5].style.color = '#fff'
            movieDescription_6.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[5].style.color = '#e7d666'
            movieDescription_6.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[6].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[6].style.color = '#fff'
            movieDescription_7.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[6].style.color = '#e7d666'
            movieDescription_7.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[7].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[7].style.color = '#fff'
            movieDescription_8.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[7].style.color = '#e7d666'
            movieDescription_8.style.display = 'block';
            show = true;
        }
    })
}

upcomingBtn.addEventListener('click', () => {
    upcomingMovie.scrollIntoView({ behavior: 'smooth' })
})

tvSeriesBtn.addEventListener('click', () => {
    tvSeriesMovie.scrollIntoView({ behavior: 'smooth' })
})

moviesBtn.addEventListener('click', () => {
    movies.scrollIntoView({ behavior: 'smooth' })
})

cartoonBtn.addEventListener('click', () => {
    cartoon.scrollIntoView({ behavior: 'smooth' })
})

comedyBtn.addEventListener('click', () => {
    comedy.scrollIntoView({ behavior: 'smooth' })
})

actionBtn.addEventListener('click', () => {
    action.scrollIntoView({ behavior: 'smooth' })
})

fantasyBtn.addEventListener('click', () => {
    fantasy.scrollIntoView({ behavior: 'smooth' })
})

homeBtn.addEventListener('click', () => {
    appEl.scrollIntoView({ behavior: 'smooth' })
    console.log('Clicked')
})

signOutEL.addEventListener('click', function () {
    window.location = 'welcome.html';
})

const spacePoliceEl = document.getElementById('spacePolice')
const btnPauseEL = document.getElementById('btn-pause');

btnPauseEL.addEventListener('click', () => {
    if (spacePoliceEl.paused) {
        spacePoliceEl.play();
        btnPauseEL.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
    } else {
        spacePoliceEl.pause();
        btnPauseEL.innerHTML = `<i class="fa-solid fa-play"></i> Play`;
    }
})

let chooseProduct = {
    id: '',
    movieName: '',
    nation: '',
    time: '',
    resolution: '',
    view: '',
    author: '',
    actor: '',
    img: '',
    description: '',
    category: '',
}

let arrayHome = [];
let arrayMovies = [];
let arrayTv = [];
let arrayUpcoming = [];
let arrayCartoon = [];
let arrayComedy = [];
let arrayAction = [];
let arrayFantasy = [];


movieInfo.map((item) => {
    if(item.home === 'home') {
        const homeNode = document.querySelector('.trending-movie-list');
        const imgHome = document.createElement('div');
        imgHome.classList.add('img-trending');
        homeNode.appendChild(imgHome);
        // imgHome.classList.add(`${item.id}`)
        imgHome.innerHTML = `
        <img src="${item.img}">
    `;
        arrayHome.push(item);
        imgHome.addEventListener('click', () => {
            const contentNode = document.querySelector('.content');
            contentNode.style.visibility = 'hidden';
            const pageProductNode = document.querySelector('.page-product');
            pageProductNode.style.visibility = 'visible';
            const id = item.id;
            const movieName = item.movieName;
            const nation = item.nation;
            const time = item.time;
            const resolution = item.resolution;
            const view = item.view;
            const author = item.author;
            const actor = item.actor;
            const img = item.img;
            const description = item.description;
            const category = item.category;
            chooseProduct.id = id;
            chooseProduct.movieName = movieName;
            chooseProduct.nation = nation;
            chooseProduct.time = time;
            chooseProduct.resolution = resolution;
            chooseProduct.view = view;
            chooseProduct.author = author;
            chooseProduct.actor = actor;
            chooseProduct.img = img;
            chooseProduct.description = description;
            chooseProduct.category = category;
            localStorage.setItem('chooseProduct',JSON.stringify(chooseProduct));
            object = JSON.parse(localStorage.getItem('chooseProduct'));
            
            pageProductNode.innerHTML = `
            <div class="content-page-product">
            <div class="info-film">
                <div class="img-info">
                    <div class="img-film">
                        <img src="${object.img}">
                        <div class="watch-now">
                            <div class="shadow-watch-now"></div>
                            <div class="click-watch-now">
                                <div class="watch">Watch now</div>
                            </div>
                        </div>
                    </div>
                    <div class="info-details">
                        <h3>${object.movieName}</h3>
                        <div class="info-details-film">
                            <div class="item-details">
                                <div class="weight">Director:</div>
                                <div>${object.author}</div>
                            </div>
                            <div class="item-details">
                                <div class="weight">Nation:</div>
                                <div>${object.nation}</div>
                            </div>
                            <div class="item-details">
                                <div class="weight">Year of manufacture:</div>
                                <div>2019</div>
                            </div>
                            <div class="item-details">
                                <div class="weight">Performer:</div>
                                <div>${object.actor}</div>
                            </div>
                            <div class="item-details">
                                <div class="weight">Time:</div>
                                <div>${object.time}</div>
                            </div>
                            <div class="item-details">
                                <div class="weight">Resolution:</div>
                                <div>${object.resolution}</div>
                            </div>
                            <div class="item-details">
                                <div class="weight">Category:</div>
                                <div>${object.category}</div>
                            </div>
                            <div class="item-details">
                                <div class="weight">View:</div>
                                <div>${object.view}</div>
                            </div>
                            <div class="description">
                                <div class="weight">Describe:</div>
                                <div>${object.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-div">
                <h2>Comment:</h2>
                <div class="input-user-comment">
                    <div class="img-user">
                        <img src="data:image/png;base64,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">
                    </div>
                    <div class="comment">
                        <input type="text" placeholder="Your comment...">
                        <div class="save-cmt">
                            <button>Save</button>
                        </div>
                    </div>
                </div>
                <div class="output-user-comment">
                    <div class="img-user">
                        <img src="data:image/png;base64,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">
                    </div>
                    <div class="commented">
                        <div class="name-user">Van Ba Linh</div>
                        <div class="time-cmt">
                            <div class="day">25/</div>
                            <div class="month">02/</div>
                            <div class="year">2023</div>
                        </div>
                        <div class="user-cmt">
                            Anh rat vui duoc gap em
                        </div>
                        <div class="fixes-delete">
                            <div class="svg-down">
                                <div class="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> 
                                </div> 
                                <div class="popup">
                                    <div class="fixes">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>                                                          
                                        </div>
                                        <div>Edit</div>
                                    </div>
                                    <div class="delete">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>  
                                        </div>
                                        <div>Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="output-user-comment">
                    <div class="img-user">
                        <img src="data:image/png;base64,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">
                    </div>
                    <div class="commented">
                        <div class="name-user">Van Ba Linh</div>
                        <div class="time-cmt">
                            <div class="day">25/</div>
                            <div class="month">02/</div>
                            <div class="year">2023</div>
                        </div>
                        <div class="user-cmt">
                            Anh rat vui duoc gap em
                        </div>
                        <div class="fixes-delete">
                            <div class="svg-down">
                                <div class="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> 
                                </div> 
                                <div class="popup">
                                    <div class="fixes">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>                                                          
                                        </div>
                                        <div>Fixes</div>
                                    </div>
                                    <div class="delete">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>  
                                        </div>
                                        <div>Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="output-user-comment">
                    <div class="img-user">
                        <img src="data:image/png;base64,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">
                    </div>
                    <div class="commented">
                        <div class="name-user">Van Ba Linh</div>
                        <div class="time-cmt">
                            <div class="day">25/</div>
                            <div class="month">02/</div>
                            <div class="year">2023</div>
                        </div>
                        <div class="user-cmt">
                            Anh rat vui duoc gap em
                        </div>
                        <div class="fixes-delete">
                            <div class="svg-down">
                                <div class="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> 
                                </div> 
                                <div class="popup">
                                    <div class="fixes">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>                                                          
                                        </div>
                                        <div>Fixes</div>
                                    </div>
                                    <div class="delete">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>  
                                        </div>
                                        <div>Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="suggest-film">
                <h2>Suggest:</h2>
                <div class="img-suggest">
                    
                </div>
            </div>
        </div>

        <div class="top-view-movie">
            <div class="title-trending">
                <h2>Trending:</h2>
            </div>
            
        </div>
        `;
            //suggest
            movieInfo.map((item) => {
                if(item.home === 'home') {
                    const imgSuggestNode = document.querySelector('.img-suggest');
                    const imgSugestFilm = document.createElement('div');
                    imgSugestFilm.classList.add('img-suggest-film');
                    imgSuggestNode.appendChild(imgSugestFilm);
                    imgSugestFilm.innerHTML = `
                    <img src="${item.img}">
                `;
                }
            });
            //trending
            
            movieInfo.map((item) => {
                if(item.home === 'home') {
                    const topViewMovieNode = document.querySelector('.top-view-movie');
                    const filmTrendingNode = document.createElement('div');
                    filmTrendingNode.classList.add('film-trending');
                    topViewMovieNode.appendChild(filmTrendingNode);
                    filmTrendingNode.innerHTML = `
                    <div class="item-film-trending">
                    <div class="img-film-trending">
                        <img src="${item.img}">
                    </div>
                    <div class="conent-film-trending">
                        <div class="name-film-trending">${item.movieName}</div>
                        <div class="view-film-trending">
                            <div class="svg-view-film-trending">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>                                              
                            </div>
                            <div>${item.view}</div>
                        </div>
                    </div>
                    `;
                }
            }) 
        })
    }












    if(item.upcoming === 'upcoming') {
        const upcomingNode = document.querySelector('.upcoming-movie-list');
        const imgUpcoming = document.createElement('div');
        imgUpcoming.classList.add('img-upcoming');
        upcomingNode.appendChild(imgUpcoming);
        imgUpcoming.innerHTML = `
        <img src="${item.img}">
    `;
        arrayUpcoming.push(item);
    }













    if(item.movie === 'movie') {
        const moviesNode = document.querySelector('.movies-list');
        const imgMovies = document.createElement('div');
        imgMovies.classList.add('img-movies');
        moviesNode.appendChild(imgMovies);
        imgMovies.innerHTML = `
        <img src="${item.img}">
    `;
        arrayMovies.push(item);
    }
















    if(item.tv === 'tv') {
        const tvNode = document.querySelector('.tvSeries-movie-list');
        const imgTv = document.createElement('div');
        imgTv.classList.add('img-tv');
        tvNode.appendChild(imgTv);
        imgTv.innerHTML = `
        <img src="${item.img}">
    `;
        arrayTv.push(item);
    }














    if(item.category === 'Cartoon') {
        const cartoonNode = document.querySelector('.cartoon-movie-list');
        const imgCartoon = document.createElement('div');
        imgCartoon.classList.add('img-cartoon');
        cartoonNode.appendChild(imgCartoon);
        imgCartoon.innerHTML = `
        <img src="${item.img}">
    `;
        arrayCartoon.push(item);
    }
    













    if(item.category === 'Comeny') {
        const comedyNode = document.querySelector('.comedy-movie-list');
        const imgComedy = document.createElement('div');
        imgComedy.classList.add('img-comedy');
        comedyNode.appendChild(imgComedy);
        imgComedy.innerHTML = `
        <img src="${item.img}">
    `;
        arrayComedy.push(item);
    } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if(item.category === 'Action') {
        const actionNode = document.querySelector('.action-movie-list');
        const imgAction = document.createElement('div');
        imgAction.classList.add('img-action');
        actionNode.appendChild(imgAction);
        imgAction.innerHTML = `
        <img src="${item.img}">
    `;
        arrayAction.push(item);
    } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    if(item.category === 'fantasy') {
        const fantasyNode = document.querySelector('.fantasy-movie-list');
        const imgFantasy = document.createElement('div');
        imgFantasy.classList.add('img-fantasy');
        imgFantasy.classList.add(`${item.id}`)
        fantasyNode.appendChild(imgFantasy);
        imgFantasy.innerHTML = `
        <img src="${item.img}">
    `;
        arrayFantasy.push(item);
    }
});
