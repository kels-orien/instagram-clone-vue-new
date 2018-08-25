import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts {
      id
      image
      postedBy {
        id
        username
        image
      }
      comments {
        text
        postedBy {
          username
        }
      }
      likes {
        id
        post {
          id
        }
        user {
          id
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentAndConnectUserPost(
    $text: String!
    $postId: ID!
    $userId: ID!
  ) {
    createComment(text: $text, postId: $postId, postedById: $userId) {
      id
      text
      postedBy {
        username
        image
      }
      createdAt
    }
  }
`;

export const CREATE_LIKE_MUTATION = gql`
  mutation CreateLikeAndConnectUserPost($postId: ID!, $userId: ID!) {
    createLike(postId: $postId, userId: $userId) {
      id
      post {
        id
      }
      user {
        id
      }
    }
  }
`;

export const DELETE_LIKE_MUTATION = gql`
  mutation DeleteLikeFromPost($likeId: ID!) {
    deleteLike(id: $likeId) {
      id
    }
  }
`;

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;
