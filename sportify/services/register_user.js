const RegisterFbUser = props => {
  const {
    name,
    email,
    picture: {
      data: { url: picture }
    }
  } = props;
  facebookUser.push({ name, email, picture });
};

const GetFbUser = () => {
  return facebookUser[0];
};

let facebookUser = [];

export default { RegisterFbUser, GetFbUser };
