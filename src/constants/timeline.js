const timelineItems = [
    {
      title: "September 2000",
      cardTitle: "Introduction to computers",
      cardDetailedText: "I used a computer for the first time. I was at school and we started a new IT class. Oh, the excitement! It still amazes me to think how natural it felt, like it was something that had been missing from my life.",
    },
    {
      title: "September 2005",
      cardTitle: "Getting used to algorithmic logic",
      cardDetailedText: "I had my first algorithm class in highschool. The computational thinking that would follow me for years to come was slowly being embedded in my brain and it was one of the few classes I wasn't stressed about.",
    },
    {
      title: "October 2008",
      cardTitle: "First Object Oriented Programming class",
      cardDetailedText: "I had a brief taste of Java and C++, and realised that it's fun to learn. Studying Mathematics at the University of Ioannina, I struggled with some of my classes, but I always looked forward to computer science and programming.",
    },
    {
      title: "November 2009",
      cardTitle: "First website with HTML",
      cardDetailedText: "I created my first local website in pure HTML. My friends would usually ask me how to do something on the computer, so I decided to make them a simple help page with useful tips. Looking at it now, if feels so strange that I had the patience to create the whole site with multiple pages only with HTML and using nothing but my laptop's Notepad. I still wasn't sure what I wanted to do in my life but something was telling me that creating such projects was it.",
    },
    {
      title: "October 2013",
      cardTitle: "Getting to know CSS",
      cardDetailedText: "I started using tumblr and had great fun changing and customising my profile's themes. That was my first introduction to CSS and by that point I knew I definitely wanted to learn more, so I started trying to find ways to do it.",
    },
    {
      title: "September 2017",
      cardTitle: "Enrolling in a Web Design course",
      cardDetailedText: "I enrolled in an online course to study Web Design. I was really enjoying it, but got stuck in the capstone project I needed to complete. Life felt hard, my then still new job as a live-in carer was demanding and my confidence screamed at me, telling me that I couldn't do it.",
    },
    {
      title: "July 2019",
      cardTitle: "Embracing my dream & first steps in JavaScript",
      cardDetailedText: "I was walking out in the sun. It was a particularly hot summer, I was listening to music and thinking about the direction I wanted my life to take. There was a moment that I still remember vividly - there was nothing I wanted to do more than become a web developer. All those years of gradually putting myself through web experiences had led me to the understanding that my ultimate goal wasn't going to change. I then cried thinking about it; not from sadness that I hadn't done it yet, but from the strangely warm certainty that I was going to do it someday. Later that day, I started my first JavaScript course.",
    },
    {
      title: "March 2020",
      cardTitle: "Much needed break",
      cardDetailedText: "when the first COVID lockdown hit, I had to stay away from work for a few months. I thought it was my chance to try to study and for the first time I learned some JavaScript and became curious about it. But what I hadn't realised until then, was that burn out is not a joke and after having been working hard for a long time, my body and brain were asking me to take a break.",
    },
    {
      title: "December 2020",
      cardTitle: "Trying to get back on track",
      cardDetailedText: "I felt determined to teach myself through tutorials and online courses. Having to keep working and not encountering the most pleasant atmosphere where I lived at the time, remaining motivated was extremely hard. Plus seeing one of my housemates towards the end of a similar journey made me want to try harder but at the same time discouraged me as the end of that journey seemed to be too far away for me.",
    },
    {
      title: "March 2022",
      cardTitle: "New beginnings",
      cardDetailedText: "I found the courage to quit my job as a live-in carer, bought a car and started working as an hourly domiciliary carer. No more staying with my clients at night; the evenings were mine to do whatever I wanted. However, the same issue appeared: lack of motivation, especially because I couldn't see immediate results and it was hard to keep going. I was still trying to study on my own, but I was also looking for courses that would help me stay focused.",
    },
    {
      title: "July 2022",
      cardTitle: "Finding School of Code",
      cardDetailedText: "I was researching opportunities for courses once again. That time, something made me look even harder as I had figured out that what blocked me from studying on my own was lack of fellow students/classmates and lack of structure. The website of School of Code caught my eye. I had just missed the deadline for the previous bootcamp, so I would have to try for the next one. The timing couldn't be more perfect.",
    },
    {
      title: "September 2022",
      cardTitle: "Applying to School of Code",
      cardDetailedText: "I had already started preparing the most fun application I've ever prepared! School of Code had this way of making me want to stick with it and make sure I would be able to attend if given the chance.",
    },
    {
      title: "December 2022",
      cardTitle: "Accepted to School of Code",
      cardDetailedText: "I found out I was in! I had to work very long hours for a couple of months, to ensure I was going to be alright until the end of the course, and the wait until we started felt so long. I couldn't believe I was finally weeks away from the continuation of my dream journey. I was so excited and I couldn't wait to start learning and working with my new classmates.",
    },
    {
      title: "March 2023",
      cardTitle: "Realisation that I was closer than ever to my dream",
      cardDetailedText: "I was in the middle of the second week of my School of Code journey. We learned how to link JavaScript to HTML to achieve interactivity on websites. Then it hit me. All those times when I was studying HTML and JavaScript, and it didn't really make sense to me... All those times I would only need to practice a bit more to see the first result of some interaction with the website's user, and then motivation would probably follow. But it's never too late to pursue your dreams and during that second week, it still felt surreal that I was actually the one creating that website interactivity.",
    },
    {
      title: "April 2023",
      cardTitle: "First time using React",
      cardDetailedText: "School of Code introduced us to React. I struggled that week and it wasn't because I didn't understand how to code, but because I realised that the way my brain was wired all those years ago to think in such an analytical way wasn't exactly what is going to help me progress. It's knowing how to think that way but also understanding when to use React's reusable components and libraries. Technology isn't the same it was in 2009 when I made that first HTML website and fitting into the modern tech world comes with being open to adjust to changes and new more efficient ways of creating things.",
    },
    {
      title: "June 2023",
      cardTitle: "Full-stack team project",
      cardDetailedText: "During our final full-stack team project at School of Code, my teammates and I embarked on the challenge of simplifying gardening for individuals, aiming to overcome the common barriers that often discourage people from starting their gardening journey. Our tech stack included React, which played a vital role in achieving code reusability, efficient state management, and the seamless deployment of our high-functioning frontend. On the backend, we employed Node.js and MongoDB to manage our plant data efficiently in a non-relational database. My contribution to this project was extensive and rewarding. I actively participated in the entire planning and design journey, where I shared creative ideas and played a pivotal role in designing wireframes and logos. Additionally, I worked diligently on the structure and functionality of the React frontend, ensuring a smooth user experience. As a team, we made sure to adhere to web accessibility standards throughout the app's development, providing an inclusive and user-friendly gardening platform. This project showcased the small, everyday progress we experienced, from design to coding challenges, and it was a testament to our collective dedication on this incredible journey.",
    },
    {
      title: "July 2023",
      cardTitle: "School of Code graduation",
      cardDetailedText: "The day I gratuated from School of Code marked a significant milestone in my life, a moment to reflect on the path I had traveled. It was a day to celebrate, not just the grand culmination of years of hard work, but also the small wins that often go unnoticed. In a world where we are conditioned to believe that success is synonymous with unceasing achievement, I learned to cherish the value of these seemingly small victories.",
    },
    {
      title: "August 2023",
      cardTitle: "Becoming a STEM Ambassador",
      cardDetailedText: "Becoming a STEM Ambassador has been a fulfilling journey that began in June when I volunteered with Southend Tech at the Chelmsford Do and Discover Festival, organized by the Chelmsford Science and Engineering Society. For this event, I created a simple Rock, Paper, Scissors game on a frontend page, which the children not only grasped quickly but also had the chance to manipulate the code themselves to understand HTML, CSS, and even some JavaScript. Witnessing their excitement and smiles as they made changes to the page was a priceless reward. I completed my training and the entire process in August, looking forward to more activities as a STEM Ambassador.",
    },
    {
      title: "October 2023",
      cardTitle: "A science festival & a global hackathon",
      cardDetailedText: "Volunteering as a STEM Ambassador at the Chelmsford Science Festival was an exhilarating experience. Alongside remarkable individuals from Southend Tech, our mission was to once again ignite children's passion for coding. We delved into Scratch, Frontend Development, Python, and Microbits, witnessing the kids' creativity shine through in their fantastic projects. The weekend was a whirlwind of science-fueled fun, and being part of initiatives like this that make a real impact on our community was an absolute honor. Participating in the Women Who Code hackathon was an incredible journey filled with learning and collaboration. Joining forces with an exceptional team of designers, developers, and content creators, we took on the challenge to create a project for the Hackathon for Social Good 2023. My role as a backend developer involved integrating Passage for passwordless authentication, ensuring organized server code, and promoting web accessibility standards. It was a rewarding experience that showcased the power of teamwork and innovation in the realm of social impact technology.",
    },
    {
      title: "October 2023",
      cardTitle: "First freelance volunteer project",
      cardDetailedText: "I had the opportunity to create a website for an upcoming retreat. The project was a great opportunity for me to apply my skills and knowledge in a real-world setting. It was such a rewarding experience to see the website come to life and to know that my work had helped a positive cause.",
    },
    {
      title: "February 2024",
      cardTitle: "Organising an online hackathon for a local tech festival",
      cardDetailedText: "My local tech group Southend Tech participated in the Basildon Creative Tech Fest 2024 with the Social Impact Hackathon event run by me with the support of the group. It was an interesting experience to organise an event and see it through, and it was a great opportunity to meet new people and learn from them."
    },
    {
      title: "August 2024",
      cardTitle: "Beginning a new web development role",
      cardDetailedText: "Following a few weeks of freelance work for PIE Code, I was offered a full-time position as a Junior WordPress Developer. I was excited to join a friendly team of developers and have the opportunity to learn from them and work in a variety of projects. Expanding my skills while doing what I love was a dream come true."
    },
  ];

export { timelineItems };