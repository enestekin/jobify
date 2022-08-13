const createJob = async (req, res) => {
  res.send('createJob');
};

const getAllJobs = async (req, res) => {
  res.send('getAllJobs');
};

const showStats = async (req, res) => {
  res.send('showStats');
};

const updateJob = async (req, res) => {
  res.send('updateJob');
};

const deleteJob = async (req, res) => {
  res.send('deleteJob');
};

export { createJob, getAllJobs, showStats, updateJob, deleteJob };
