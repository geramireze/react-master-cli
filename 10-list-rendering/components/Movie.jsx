import React, { Component } from 'react';
import up from '../img/up.svg';
import down from '../img/down.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

class Movie extends Component {
    state = {
        gusto: undefined,
    };

    like = () => {
        this.setState(() => ({
            gusto: true,
        }));
    };

    liked = () => {
        this.setState(() => ({
            gusto: false,
        }));
    };

    render() {
        return (
            <li>
                <figure>
                    <img
                        src={this.props.cover}
                        alt={`${this.props.name} - ${this.props.year}`}
                        className="cover"
                    />
                    <div className="content">
                        <div className="title">
                            <h2>{`${this.props.name} - (${this.props.year})`}</h2>
                            <button type="button" onClick={this.like}>
                                <img src={up} alt="Vote up" />
                            </button>
                            <button type="button" onClick={this.liked}>
                                <img src={down} alt="Vote down" />
                            </button>
                            <img src={like} alt="Like status" />
                        </div>
                        <small>
                            IMDB <span>{`0.0/${this.props.score}`}</span>
                        </small>
                        <figcaption>{this.props.description}</figcaption>
                    </div>
                </figure>
            </li>
        );
    }
}

export default Movie;
