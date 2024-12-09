const navLinks = {
    "home": '/',
    "menu": '#explore-menu', 
    "mobile app":'#AppDownload', 
    "contact us": '#Footer'
}

function getId(column){
    return navLinks[column].replace("#", '')
}


export default navLinks
export {getId}