document.addEventListener('DOMContentLoaded', function() {
    // here we will put the code of our application
});


function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');

	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);

	return element;
  }

  function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');

	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);

	return element;
  }
  document.createElement(basicElement || 'div');

  function Column(name) {
	var self = this;

	this.id = randomString();
	this.name = name;
	this.element = generateTemplate('column-template', { name: this.name, id: this.id });

	this.element.querySelector('.column').addEventListener('click', function (event) {
	  if (event.target.classList.contains('btn-delete')) {
		self.removeColumn();
	  }

	  if (event.target.classList.contains('add-card')) {
		self.addCard(new Card(prompt("Enter the name of the card")));
	  }
	});
  }

  Column.prototype = {
    addCard: function(card) {
      this.element.querySelector('ul').appendChild(card.element);
    },
    removeColumn: function() {
      this.element.parentNode.removeChild(this.element);
    }
};

  <script id="column-template" type="x-tmpl-mustache">
    <div class="column">
        <h2 class="column-title">{{ name }}</h2>
        <ul id={{ id }} class="column-card-list"></ul>
        <button class="btn-delete">X</button>
        <button class="add-card">Add a card</button>
    </div>
</script>

this.element.querySelector('.column').addEventListener('click', function (event) {
	if (event.target.classList.contains('btn-delete')) {
	  self.removeColumn();
	}

	if (event.target.classList.contains('add-card')) {
	  self.addCard(new Card(prompt("Enter the name of the card")));
	}
  });
