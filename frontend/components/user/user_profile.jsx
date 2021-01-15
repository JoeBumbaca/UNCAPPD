import React from 'react';
import NavContainer from '../nav/nav_container';
import ReviewIndexItem from '../reviews/review_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};

    this.submitFriendRequest = this.submitFriendRequest.bind(this);
  };

  componentDidMount() {
    this.props.fetchUserReviews(this.props.userId);
    this.props.fetchUser(this.props.match.params.userId)
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUserReviews(this.props.userId);
    }
  }

  submitFriendRequest() {
    const request = {
      requester_id: this.props.currentUserId,
      requestee_id: this.props.user.id
    };

    this.props.createFriendRequest(request);
  }

  render() {
    if (!this.props.reviews || !this.props.user) {
      return null;
    } else {
      const user = this.props.user;
      const addFriendButton = (this.props.currentUserId === user.id) ? '' : <i className="fas fa-user-plus" onClick={this.submitFriendRequest}></i>;
      const reviews = this.props.reviews.reverse().map(review => {
        return <ReviewIndexItem key={review.id} review={review}/>
      })
      return (
        <>
          <NavContainer />
          <section className='user-profile-main'>
            <section className='cover-photo-container'>
              <section className='user-left'>
                <p className='user-profile-info'>{user.username}</p>
                {addFriendButton}
              </section>
              <p className='user-profile-info'>Number of Reviews: {user.review_ids.length}</p>
            </section>
            <section className='user-profile-body'>
              <ul className='user-profile-reviews'>
                {reviews}
              </ul>
              {/* <article className='user-friends'>
                <p>{user.username}'s Friends</p>
              </article> */}
            </section>
          </section>
        </>
      );
    }
  };

};

export default UserProfile;