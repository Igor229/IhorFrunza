function Banner (props) {
    const {bannerTitle} = props
    return (
        <section className="banner">
            <div className="banner__content">
                <h3 className="banner__content-text">
                    {bannerTitle}
                </h3>
            </div>
        </section>
    )
}

export default Banner;