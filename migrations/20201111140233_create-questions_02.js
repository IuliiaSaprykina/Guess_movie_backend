exports.up = function(knex) {
    return knex.schema.createTable("questions_02", questions_02 => {
        questions_02.increments()
        questions_02.text("shot_src")
        questions_02.string("choiceA")
        questions_02.string("choiceB")
        questions_02.string("choiceC")
        questions_02.string("choiceD")
        questions_02.string("correct")
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableExists("questions_02")
  };