exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("partyrequest")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("partyrequest").insert([
        {
          name: "Party A",
          email: "partyA@example.com", // Add email field
          delegate_name: "Delegate One",
          delegate_email: "delegate1@example.com",
          phone: "123456789",
          list_name: "List A",
          status: "Pending",
        },
        {
          name: "Party B",
          email: "partyB@example.com", // Add email field
          delegate_name: "Delegate Two",
          delegate_email: "delegate2@example.com",
          phone: "987654321",
          list_name: "List B",
          status: "Approved",
        },
        {
          name: "Party C",
          email: "partyC@example.com", // Add email field
          delegate_name: "Delegate Three",
          delegate_email: "delegate3@example.com",
          phone: "555666777",
          list_name: "List C",
          status: "Rejected",
        },
      ]);
    });
};
