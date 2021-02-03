const Footer = () => {
    let d = new Date();
    let y = d.getFullYear();
    let year = new Date().getFullYear();

    return(
        <p>Copyright Susan {year}</p>
    )
};

export default Footer;