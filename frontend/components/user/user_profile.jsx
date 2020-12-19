import React from 'react';
import NavContainer from '../nav/nav_container';
import ReviewIndexItem from '../reviews/review_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.fetchUserReviews(this.props.userId);
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUserReviews(this.props.userId);
    }
  }

  render() {
    if (!this.props.reviews || !this.props.user) {
      return null;
    } else {
      const user = this.props.user;
      const reviews = this.props.reviews.map(review => {
        return <ReviewIndexItem key={review.id} review={review}/>
      })
      return (
        <>
          <NavContainer />
          <section className='user-profile-main'>
            <section className='cover-photo-container'>
              <p>{user.username}</p>
              <p>Number of Reviews: {user.review_ids.length}</p>
            </section>
            <section className='user-profile-body'>
              <ul className='user-profile-reviews'>
                {reviews}
              </ul>
              <article className='user-friends'>
                <p>{user.username}'s Friends</p>
              </article>
            </section>
          </section>
        </>
      );
    }
  };

};

export default UserProfile;