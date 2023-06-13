const Report = () => {
  useState[(userArray, setUserArray)] = useState([]);
  useState[(firstName, setFirstName)] = useState("");
  useState[(lastName, setLastName)] = useState("");
  useState[(phone, setPhone)] = useState("");
  useState[(loading, setLoading)] = useState(true);

  const handleSubmit = () => {
    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };

    let oldArrUser = userArray;
    oldArrUser.push(userInfo);

    let sortedUserArray = oldArrUser.sort((a, b) => {
      if (a.lastName() <= b.lastName()) return -1;
      if (a.lastName() > b.lastName()) return 1;
    });

    setUserArray(sortedUserArray);
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
      </form>
      {!loading &&
        userArray.map((user) => {
          return (
            <div>
              First Name = {user.firstName}
              Last Name = {user.lastName}
              Phone = {user.phone}
            </div>
          );
        })}
    </div>
  );
};
