// const knex = require('../knex_config');

// // Controller function to get local lists by circle_id
// exports.getAllLocalLists = async (req, res) => {
//   const { circle_id } = req.query; // Get circle_id from query parameters
//   console.log(circle_id);
  

//   try {
//     let query = knex('localList')
//       .select('localList.id', 'localList.name', 'localList.count')
//       .where('localList.circle_id', circle_id); // Filter by circle_id directly

//     const localLists = await query;

//     res.json(localLists);
//   } catch (error) {
//     console.error('Error fetching local lists:', error); // Log the error
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// };


//////////////////////////////////////////////



const knex = require('../config/db');

// Controller function to get local lists by circle_id with their candidates
exports.getAllLocalLists = async (req, res) => {
  const { circle_id } = req.query;

  try {
    let localLists = await knex('localList')
      .select('localList.id', 'localList.name', 'localList.count')
      .where('localList.circle_id', circle_id);

    // Fetch candidates for each local list
    for (let list of localLists) {
      const candidates = await knex('LocalListsCandidates')
        .select('candidate_name')
        .where('local_list_id', list.id);

      list.candidates = candidates; // Attach candidates to the local list
    }

    res.json(localLists);
  } catch (error) {
    console.error('Error fetching local lists:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

