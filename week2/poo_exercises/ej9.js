class Bank {
  constructor() {
    this.bankName = '';
    this.branches = [];
  }
  addBranch(branch) {
    this.branches.push(branch);// Add the branch to the branches array
    console.log(`${branch} added successfully.`);
  }

  removeBranch(branch) {
    const index = this.branches.indexOf(branch);
    if (index !== -1) {// Check if the branch exists
      this.branches.splice(index, 1);// Remove the branch from the branches array
      console.log(`Branch ${branch} removed successfully.`);
    } 
    else {
      console.log(`Branch "${branch}" does not exist.`);
    }
  }

  displayBranches() {
    if (this.branches.length === 0) {
      console.log('No branches available.');
    } else {
      console.log('List of Bank Branches:');
      this.branches.forEach((branch, index) => {
        console.log(`${index + 1}. ${branch}`);
      });
    }
  }
}

const bank = new Bank();
bank.addBranch('Branch A');
bank.addBranch('Branch B');
bank.addBranch('Branch C');

bank.displayBranches();
bank.removeBranch('Branch B');
bank.displayBranches();