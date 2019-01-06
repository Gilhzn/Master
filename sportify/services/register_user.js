const RegisterFbUser = props => {
  const {
    name,
    email,
    picture: {
      data: { url }
    }
  } = props;

  facebookUser.push({ name, email, picture: url });
};

const GetFbUser = () => {
  return facebookUser[0];
};

let facebookUser = [];

export default { RegisterFbUser, GetFbUser };
