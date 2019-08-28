import React, { Component } from 'react'
import MediaPlayer from './media-player'
import playlistData from './playlist-data'

const mod = (num, max) => ((num % max) + max) % max

class MediaList extends Component {
  _handleTrackClick(track) {
    this.props.onTrackClick(track)
  }

  render() {
    const { tracks, currentTrack } = this.props
    return (
      <aside className="media-playlist">
        <header className="media-playlist-header">
          <h3 className="media-playlist-title">Playlist</h3>
        </header>
        <ul className="media-playlist-tracks">
          {tracks.map(track => (
            <li
              key={track.label}
              className={`media-playlist-track ${
                track === currentTrack ? 'is-active' : ''
              }`}
              onClick={this._handleTrackClick.bind(this, track)}
            >
              {track.label}
            </li>
          ))}
        </ul>
      </aside>
    )
  }
}

class PlayList extends Component {
  state = {
    currentTrack: { src: null, label: 'No media loaded' },
    showMediaPlayer: true,
    repeatTrack: false,
    autoPlay: true,
  }

  _handleTrackClick = track => {
    this.setState({ currentTrack: track })
  }

  _navigatePlaylist = direction => {
    const newIndex = mod(
      playlistData.indexOf(this.state.currentTrack) + direction,
      playlistData.length
    )
    this.setState({ currentTrack: playlistData[newIndex] })
  }

  render() {
    const { showMediaPlayer, currentTrack, repeatTrack, autoPlay } = this.state
    return (
      <div>
        <button
          onClick={() => this.setState({ showMediaPlayer: !showMediaPlayer })}
        >
          Toggle Media Player
        </button>
        {showMediaPlayer && (
          <div className="media-player-wrapper">
            <MediaPlayer
              ref={c => (this._mediaPlayer = c)}
              src={currentTrack.src}
              autoPlay={autoPlay}
              loop={repeatTrack}
              currentTrack={currentTrack.label}
              repeatTrack={repeatTrack}
              onPrevTrack={() => this._navigatePlaylist(-1)}
              onNextTrack={() => this._navigatePlaylist(1)}
              onRepeatTrack={() => {
                this.setState({ repeatTrack: !repeatTrack })
              }}
              onPlay={() => !autoPlay && this.setState({ autoPlay: true })}
              onPause={() => this.setState({ autoPlay: false })}
              onEnded={() => !repeatTrack && this._navigatePlaylist(1)}
            />
            <MediaList
              tracks={playlistData}
              currentTrack={currentTrack}
              onTrackClick={this._handleTrackClick}
            />
          </div>
        )}
      </div>
    )
  }
}

export default PlayList