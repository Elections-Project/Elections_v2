exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("LocalCandidatesRequest")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("LocalCandidatesRequest").insert([
        {
          Name: "Candidate One",
          List_Name: "List A",
          Email: "candidate1@example.com",
          Circle_ID: 1,
          Gender: "Male",
          Birth_Date: "1980-05-15",
          Type_Of_Chair: "Type 1",
          Religion: "Religion A",
          Status: "Pending",
        },
        {
          Name: "Candidate Two",
          List_Name: "List B",
          Email: "candidate2@example.com",
          Circle_ID: 2,
          Gender: "Female",
          Birth_Date: "1985-07-20",
          Type_Of_Chair: "Type 2",
          Religion: "Religion B",
          Status: "Approved",
        },
        {
          Name: "Candidate Three",
          List_Name: "List C",
          Email: "candidate3@example.com",
          Circle_ID: 3,
          Gender: "Male",
          Birth_Date: "1990-09-10",
          Type_Of_Chair: "Type 3",
          Religion: "Religion C",
          Status: "Rejected",
        },
      ]);
    });
};
