require(['gitbook', 'jQuery'], function (gitbook, $) {
  var url = ''
  var title = ''
  var style = ''
  var insertLogo = function (url, title, style) {
    var logo = url ? '<img src="' + url + '" style="' + style + '"></img>' : ''
    var ttl = title ? '<span class="summary-footer-label">' + title + '</span>' : ''
    $('.book-summary').children().last().after('<div class="summary-footer">' + logo + ttl + '</div>')
  }
  gitbook.events.bind('start', function (e, config) {
    url = config['insert-footer']['url']
    title = config['insert-footer']['title']
    style = config['insert-footer']['style']
  })

  gitbook.events.bind("page.change", function() {
    insertLogo(url, title, style)
  })
})
