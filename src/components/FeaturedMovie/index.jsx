import React from 'react';
import './styles.css'

function FeaturedMovie({ item }) {
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured-points">{item.vote_average} pontos</div>
                        <div className="featured--year">2099</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie