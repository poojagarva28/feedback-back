//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc create contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(200).json({ message: "Create contacts" });
};

//@desc get contacts
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get single contacts ${req.params.id}` });
};

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contacts ${req.params.id}` });
};

//@desc Delete contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contacts ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
