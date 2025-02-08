const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');



exports.getgallery = async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/gallery/get-all-galleries/${websiteID}`);


    return data || null;
};



exports.getgalleryalbum = async (title) => {  
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/gallery/get-all-galleries/${websiteID}`);
    
    // Filter the galleries by the title
    const filteredAlbums = data.filter(album => album.title.toLowerCase() === title.toLowerCase());

    // Return the filtered albums as an array (or empty array if no match)
    return filteredAlbums.length > 0 ? filteredAlbums : [];
};

