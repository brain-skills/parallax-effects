document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

document.addEventListener('DOMContentLoaded', function() {
  SVGInject(document.querySelectorAll("img.injectable"));
});

var $svgIconBox = $('.icon');
$svgIconBox.each(function() {
    var $this = $(this),
        $svgIcon = $this.find('.svg-icon'),
        $id = $svgIcon.attr('id'),
        $icon = $svgIcon.data('svg-icon');
    var $vivus = new Vivus($id, { duration: 100, file: $icon });
    $this.on('mouseenter', function () {
        $vivus.reset().play();
    });
});