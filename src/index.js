class IsFriday {
  constructor() {
      this.prop1 = 'Property 1'
      this.prop2 = 'Property 2'
      this.array = [1, 2, 3, 4, 5]
  }

  printArray() {
      console.log('Called sample method');
      this.array.map(item => {
          console.log(item);
      })
  }
}

export default IsFriday;
