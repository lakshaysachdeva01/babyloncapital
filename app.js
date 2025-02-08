require('dotenv').config();  // Load environment variables from .env file
const { API_BASE_URL , WEBSITE_ID_KEY} = require('./config/config');
const { getWebsiteID } = require('./utils/helper');
const {  getHomeDesktopBanner, getdoctordetails,getjobs,getHomepopupBanner, getotherjobs,getjobdetails, getdoctors ,gettestimonial,getclientle , getspecialization } = require('./controller/homecontroller');
const { getBlog,getposts , getevents,getBlogfull , getlatestblogs,getlatestevents, getcasestudy,getlatestcasestudy} = require('./controller/blogcontroller');
const { getgallery } = require('./controller/gallerycontroller');
const { CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS} = require('./config/config');
// const { getlocation,  ,getAdBanner,  ,getfilteredlocation  ,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS , BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS} = require('./controller/locationcontroller');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const metaLogoPath = "assets/images/icon/metalogo.png";
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define the views directory

// Serve static files (like CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    // const doctors = await getdoctors();
    const websiteID = await getWebsiteID(); 
  const banners = await getHomeDesktopBanner();
    const testimonial = await gettestimonial();
    const blogs = await getBlog();
    // // const gallery= await getgallery();
    // // const clients = await getclientle();
    // const popupbanners = await getHomepopupBanner();
    // // const location= await getlocation();
    const seoDetails = {
            title: "",
            metaDescription: "",
            metaImage: `${baseUrl}/${metaLogoPath}`,
            keywords:" ",
            canonical:"",
    } 
   
   
    res.render('index', {body: "",baseUrl,banners,websiteID,blogs,testimonial,seoDetails});
});



app.get('/contact', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('contact', {body: "",websiteID,API_BASE_URL,WEBSITE_ID_KEY,CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,seoDetails});
});


// app.get('/about', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const testimonial = await gettestimonial();
//     const clients = await getclientle();
//     const doctors = await getdoctors();
//     const seoDetails = {
//         title: "",
//         metaDescription: "",
//         metaImage: ``,
//         keywords:" ",
//         canonical:"",
//     } 
   
//     res.render('about', {body: "",baseUrl,doctors,clients,testimonial, seoDetails});
// });




// app.get('/services', async (req, res) => {
  
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const testimonial = await gettestimonial();
//     const seoDetails = {
//         title: "",
//         metaDescription: "",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"",
//         canonical:"",
//     } 
   
//     res.render('services', {body: "", seoDetails,testimonial});
// });

app.get('/mice', async (req, res) => {
  
    const baseUrl = req.protocol + '://' + req.get('Host');
    const testimonial = await gettestimonial();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('mice', {body: "", seoDetails,testimonial});
});

app.get('/wedding', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const testimonial = await gettestimonial();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('wedding', {body: "", SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY,testimonial});
});

app.get('/dining', async (req, res) => {
  
    const baseUrl = req.protocol + '://' + req.get('Host');
    const testimonial = await gettestimonial();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('dining', {body: "", seoDetails,testimonial});
});

app.get('/rooms', async (req, res) => {
  
    const baseUrl = req.protocol + '://' + req.get('Host');
    const testimonial = await gettestimonial();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('rooms', {body: "", seoDetails,testimonial});
});

app.get('/offer', async (req, res) => {
  
    const baseUrl = req.protocol + '://' + req.get('Host');
    const testimonial = await gettestimonial();
    const events = await getevents();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('offers', {body: "",events, seoDetails,testimonial});
});

app.get('/executive-room-details', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('executive-room-details', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});

app.get('/deluxe-room-details', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('deluxe-room-details', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});

app.get('/super-deluxe-room-details', async (req, res) => {
  
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('super-deluxe-room-details', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});


app.get('/suite-room-details', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('suite-room-details', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});

app.get('/executivesuite-room-details', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('executivesuite-room-details', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});


app.get('/In-house-dining', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('inhouse', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});

app.get('/seasoning', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('seasoning', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});
app.get('/cafeteria-and-company', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('cafeteria', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});
app.get('/penthouse', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('penthouse', {body: "",SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails,websiteID,API_BASE_URL,WEBSITE_ID_KEY});
});
function getReserveDetails(reserve) {
    const reserveDetailsMap = {
        "Emerald-01": {
            image: "/assets/img/emerald1one.avif",
            subtitle: "Where Elegance Meets Excellence"
        },
        "Emerald-02": {
            image: "/assets/img/emerald2one.avif",
            subtitle: "Unveiling Luxury, Crafting Experiences"
        },
        "Moonlight": {
            image: "/assets/img/moonlight1.avif",
            subtitle: "A Harmony of Sophistication and Comfort"
        },
        "Mantra": {
            image: "/assets/img/mantra1.avif",
            subtitle: "Setting the Standard for Elegant Affairs"
        },
        "Pavilion": {
            image: "/assets/img/pavilion1.avif",
            subtitle: "An Iconic Destination for Prestigious Events"
        }
    };

    return reserveDetailsMap[reserve] || { image: "", subtitle: "" }; // Default values if reserve not found
}

// Inside the /mice/:reserve route
app.get('/mice/:reserve', async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const { reserve } = req.params;
    const baseUrl = req.protocol + '://' + req.get('Host');
    
    const { image, subtitle } = getReserveDetails(reserve); // Get image and subtitle
    
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "",
        canonical: "",
    };

    res.render('reservation', { 
        body: "", 
        reserve, 
        image, 
        subtitle, 
        SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, 
        seoDetails, 
        websiteID, 
        API_BASE_URL, 
        WEBSITE_ID_KEY 
    });
});


// app.get('/joblisting', async (req, res) => {
//   const jobs = await getjobs();
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const testimonial = await gettestimonial();
//     const seoDetails = {
//         title: "",
//         metaDescription: "",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"",
//         canonical:"",
//     } 
   
//     res.render('joblisting', {body: "", seoDetails,jobs,testimonial});
// });

// app.get('/listing-enquiry/:slug', async (req, res) => {
//     const jobs = await getjobs();
//     const { slug } = req.params;
//       const baseUrl = req.protocol + '://' + req.get('Host');
//       const websiteID = await getWebsiteID(); 
//       const jobdetails =await getjobdetails(slug);
//       const otherjobs = await getotherjobs(slug);
//       const seoDetails = {
//           title: "",
//           metaDescription: "",
//           metaImage: `${baseUrl}/${metaLogoPath}`,
//           keywords:"",
//           canonical:"",
//       } 
     
//       res.render('listing-enquiry', {body: "", websiteID,API_BASE_URL,WEBSITE_ID_KEY,seoDetails,jobs,otherjobs,jobdetails,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS});
//   });


// app.get('/team', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const calculateExperience = (firstDateOfPractice) => {
//         const today = new Date();
//         const practiceDate = new Date(firstDateOfPractice);
    
//         let yearsExperience = today.getFullYear() - practiceDate.getFullYear();
//         const monthDifference = today.getMonth() - practiceDate.getMonth();
    
//         if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < practiceDate.getDate())) {
//             yearsExperience--;
//         }
    
//         return yearsExperience;
//     };
//     const doctors = await getdoctors();
//     doctors.forEach(doctor => {
//         doctor.experience = calculateExperience(doctor.firstDateOfPractice);
//     });
//     const seoDetails = {
//         title: "",
//         metaDescription: "",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"",
//         canonical:"",
//     } 
   
//     res.render('team', { body: "", doctors, seoDetails });
// });



app.get('/thankyou', async (req, res) => {
  
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('thankyou', {body: "", seoDetails});
});

// app.get('/appointment', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const websiteID = await getWebsiteID(); 
//     const testimonial = await gettestimonial();
//     const doctors = await getdoctors();
//     const specialization = await getspecialization();
//     console.log("Doctors Data:", doctors);
//     const seoDetails = {
//         title: "",
//         metaDescription: "",
//         metaImage: ``,
//         keywords:" ",
//         canonical:"",
//     } 
   
//     res.render('appointmentpage', {body: "",websiteID,API_BASE_URL,WEBSITE_ID_KEY,baseUrl,doctors,specialization,WIZARDFORM_ENQUIRY_DYNAMIC_FIELDS_KEYS,testimonial, seoDetails});
// });

// app.get('/service-detail', async (req, res) => {  
//     // const { serviceId } = req.params;
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const websiteID = await getWebsiteID();  
    


//     const seoDetails = {
//         title: ``,
//         metaDescription: ``,
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords: ``,
//         canonical: ``,
//     };
//     res.render('service-detail', { seoDetails, websiteID, API_BASE_URL, WEBSITE_ID_KEY });  // Pass serviceId to the detailed.ejs page
// });

app.get('/gallery', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const gallery= await getgallery();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"h",
    } 
   
    res.render('gallery', {body: "", gallery,seoDetails});
});

app.get('/gallery/:filter', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const {filter} = req.params;
    const gallery= await getgallery();
    const seoDetails = {
        title: ``,
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:``,
    } 
   
    res.render('gallery', {body: "", gallery,seoDetails});
});


// app.get('/locations', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const location= await getlocation();
//     const seoDetails = {
//         title: "Karyasiddhi Locations | Explore Our Coworking Spaces Across Multiple Cities",
//         metaDescription: "Discover Karyasiddhi's coworking spaces across various cities. From flexible workspaces to premium amenities, explore our locations . Find the perfect coworking space that suits your business needs.",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"Karyasiddhi coworking locations,Coworking spaces in multiple cities,Coworking offices Raipur ",
//         canonical:"https://www.karyasiddhico.work/locations",
//     } 
   
//     res.render('locations', {body: "", location ,seoDetails});
// });

// app.get('/locationdetails/:name', async (req, res) => {
//     const {name} = req.params;
//     const testimonial = await gettestimonial();
//     const websiteID = await getWebsiteID(); 
//     const location= await getlocation();
//     const adbanner = await getAdBanner();
//   const filtered = await getfilteredlocation(name);
//   const baseUrl = req.protocol + '://' + req.get('Host');
//     const seoDetails = {
//         title: `Karyasiddhi Coworking Space in ${name} | Explore Our Workspaces and Amenities`,
//         metaDescription: `Learn more about Karyasiddhi's coworking space in ${name}. Offering flexible workspaces, private cabins, meeting rooms, and premium amenities, our Raipur location is designed to boost your productivity and support your business needs.`,
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:`Karyasiddhi ${name} coworking space,Coworking space in ${name},Flexible workspaces ${name},Private cabins ${name} coworking,Meeting rooms ${name} coworking,Coworking space with amenities ${name} `,
//         canonical: `https://www.karyasiddhico.work/locationdetails/${name}`,
//     }

//     res.render('locationdetails', {body: "", filtered,seoDetails,location, testimonial,websiteID,API_BASE_URL,WEBSITE_ID_KEY,location,adbanner, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS});
// });





// app.get('/bookseat', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const websiteID = await getWebsiteID(); 
//     const location= await getlocation();
//     const clients = await getclientle();
//     const seoDetails = {
//         title: "Book Your Coworking Seat at Karyasiddhi | Flexible Workspaces in Raipur",
//         metaDescription: "Secure your spot at Karyasiddhi coworking spaces. Fill out the form to book a flexible coworking seat at our Raipur location. Get access to premium workspaces and amenities designed for productivity.",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"Book coworking seat Raipur,Coworking space booking form,Reserve a workspace Raipur,Flexible coworking seat booking,Coworking seat reservation Raipur ",
//         canonical:"https://www.karyasiddhico.work/bookseat",
//     } 
   
//     res.render('bookseat', {body: "",seoDetails ,websiteID,API_BASE_URL,WEBSITE_ID_KEY,location,clients, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS});
// });








// app.get('/career', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const websiteID = await getWebsiteID();
//     const location= await getlocation(); 
//     const seoDetails = {
//         title: "Join the Karyasiddhi Team | Career Opportunities at Our Coworking Space",
//         metaDescription: "Explore exciting career opportunities at Karyasiddhi. Send us your resume and be part of a growing team in a dynamic coworking environment. Apply now and help us shape the future of coworking spaces.",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:" Career opportunities at Karyasiddhi,Join Karyasiddhi team,Coworking space job openings",
//         canonical:"https://www.karyasiddhico.work/career",
//     } 
   
//     res.render('career', {body: "", seoDetails,location, websiteID,API_BASE_URL,WEBSITE_ID_KEY,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS});
// });
// app.get('/posts', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const posts = await getposts();
//     const blogs = await getBlog();
//     const events = await getevents();
//     const casestudy = await getcasestudy();
//     const gallery= await getgallery();
//     const seoDetails = {
//         title: "",
//         metaDescription: "",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"",
//         canonical:"",
//     } 
   
//     res.render('posts', {body: "",blogs,baseUrl,events,casestudy,posts,gallery,  seoDetails});
// });



app.get('/blogs', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const blogs = await getBlog();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"",
        canonical:"",
    } 
   
    res.render('blogs', {body: "",blogs,baseUrl,seoDetails});
});




app.get('/blog-details/:slug', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { slug } = req.params;
    const blogfull = await getBlogfull(slug);
    const latestblog = await getlatestblogs(slug);
    const websiteID = await getWebsiteID(); 
   
    // Extract the first 50 words from the description
    const truncateToWords = (text, wordCount) => {
        if (!text) return '';
        return text.split(' ').slice(0, wordCount).join(' ') + '...';
    };
    const truncatedDescription = truncateToWords(blogfull?.description, 25);

    // Set the meta image dynamically
   
  
    const seoDetails = {
        title: blogfull?.title,
        metaDescription: truncatedDescription, // Use the truncated description
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: `${blogfull.seoDetails.tags}`,
        canonical:``,
    };

    res.render('blog-details', {
        body: "",
        seoDetails,
       baseUrl,
       latestblog,
        blogfull,websiteID,API_BASE_URL,WEBSITE_ID_KEY
    });
});





app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });