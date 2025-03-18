const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const students = await getAllStudents();
    res.json({ students });

});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const { payload } = req.body;
    const message = await addNewStudent({ payload });
    res.json(message);

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const { payload } = req.body;
    const message = await updateStudent({ payload });
    res.json(message);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const { id } = req.params;
    const detail = await getStudentDetail(id);
    res.json(detail);

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const { id } = req.params;
    const { id: reviewer_id} = req.user;
    const { status } = req.body;
    const message = await setStudentStatus({ id, reviewer_id, status });
    res.json(message);

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
