"use strict";
require('traceur-source-maps').install(require('traceur'));
var Character = require('./modules_character');
var Monster = function Monster(x, y, name) {
  $traceurRuntime.superCall(this, $Monster.prototype, "constructor", [x, y]);
  console.log('Ctoring Monster');
  this.name = name;
  this.health_ = 100;
};
var $Monster = Monster;
($traceurRuntime.createClass)(Monster, {
  attack: function(character) {
    $traceurRuntime.superCall(this, $Monster.prototype, "attack", [character]);
  },
  get isAlive() {
    return this.health_ > 0;
  },
  get health() {
    return this.health_;
  },
  set health(value) {
    debugger;
    if (value < 0)
      throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}, {}, Character);
module.exports = Monster;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNfbW9uc3Rlci5lczYuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci83IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzkiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLFNBQVEsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDO0FDQXhHLEFBQUksRUFBQSxVREVKLFNBQU0sUUFBTSxDQUNFLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBRyxDQUFBLElBQUcsQ0FBRztBRUgxQixBRklJLGdCRUpVLFVBQVUsQUFBQywyQ0ZJZixDQUFBLENBQUcsRUFBQSxFRUh1QyxDRkdyQztBQUNYLFFBQU0sSUFBSSxBQUFDLENBQUMsaUJBQWdCLENBQUMsQ0FBQTtBQUM3QixLQUFHLEtBQUssRUFBSSxLQUFHLENBQUM7QUFDaEIsS0FBRyxRQUFRLEVBQUksSUFBRSxDQUFDO0FDUGtCLEFEUXRDLENDUnNDO0FFQXhDLEFBQUksRUFBQSxtQkFBb0MsQ0FBQTtBQ0F4QyxBQUFDLGVBQWMsWUFBWSxDQUFDLEFBQUM7QUpVM0IsT0FBSyxDQUFMLFVBQU8sU0FBUSxDQUFHO0FFVnBCLEFGV0ksa0JFWFUsVUFBVSxBQUFDLHNDRldSLFNBQVEsRUVWMkIsQ0ZVekI7RUFHekI7QUFFQSxJQUFJLFFBQU0sRUFBSTtBQUFFLFNBQU8sQ0FBQSxJQUFHLFFBQVEsRUFBSSxFQUFBLENBQUM7RUFBRTtBQUN6QyxJQUFJLE9BQUssRUFBSTtBQUFFLFNBQU8sQ0FBQSxJQUFHLFFBQVEsQ0FBQztFQUFFO0FBQ3BDLElBQUksT0FBSyxDQUFFLEtBQUksQ0FBRztBQUNoQixZQUFRO0FBQ1IsT0FBSSxLQUFJLEVBQUksRUFBQTtBQUFHLFVBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQyw4QkFBNkIsQ0FBQyxDQUFDO0FBQUEsQUFDOUQsT0FBRyxRQUFRLEVBQUksTUFBSSxDQUFDO0VBQ3RCO0FBQUEsS0FwQm9CLFVBQVEsQ0lEMEI7QUp3QnhELEtBQUssUUFBUSxFQUFJLFFBQU0sQ0FBQTtBQUFBIiwiZmlsZSI6Im1vZHVsZXNfbW9uc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7bGV0IENoYXJhY3RlciA9IHJlcXVpcmUoJy4vbW9kdWxlc19jaGFyYWN0ZXInKVxuXG5jbGFzcyBNb25zdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgbmFtZSkge1xuICAgIHN1cGVyKHgsIHkpO1xuICAgIGNvbnNvbGUubG9nKCdDdG9yaW5nIE1vbnN0ZXInKVxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5oZWFsdGhfID0gMTAwO1xuICB9XG5cbiAgYXR0YWNrKGNoYXJhY3Rlcikge1xuICAgIHN1cGVyLmF0dGFjayhjaGFyYWN0ZXIpO1xuICAgIC8vIENhbiBhbHNvIGJlIHdyaXR0ZW4gYXM6XG4gICAgLy8gc3VwZXIoY2hhcmFjdGVyKTtcbiAgfVxuXG4gIGdldCBpc0FsaXZlKCkgeyByZXR1cm4gdGhpcy5oZWFsdGhfID4gMDsgfVxuICBnZXQgaGVhbHRoKCkgeyByZXR1cm4gdGhpcy5oZWFsdGhfOyB9XG4gIHNldCBoZWFsdGgodmFsdWUpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBpZiAodmFsdWUgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ0hlYWx0aCBtdXN0IGJlIG5vbi1uZWdhdGl2ZS4nKTtcbiAgICB0aGlzLmhlYWx0aF8gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vbnN0ZXIiLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMSIsIiR0cmFjZXVyUnVudGltZS5zdXBlckNhbGwoJF9fcGxhY2Vob2xkZXJfXzAsICRfX3BsYWNlaG9sZGVyX18xLCAkX19wbGFjZWhvbGRlcl9fMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzMpIiwidmFyICRfX3BsYWNlaG9sZGVyX18wID0gJF9fcGxhY2Vob2xkZXJfXzEiLCIoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKSgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzMpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9