exports.command = function (id, att) {
    return this.waitForElementVisible(id)
      .getAttribute(id,att,(result)=>{
          console.log("RESULT IS", result)
          return result
      })
};
