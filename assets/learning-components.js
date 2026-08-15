(function () {
  "use strict";
  function esc(value) {
    return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function teacher(config) {
    return { purpose: config.purpose, say: config.say, notes: config.notes || [], answer: config.answer };
  }
  function sourceBar(source) {
    var bits = [source.material, source.page, source.exercises, source.audio, source.workbook].filter(Boolean).map(function (item) { return "<span>" + esc(item) + "</span>"; });
    return '<div class="source-bar" aria-label="Book reference">' + bits.join("") + "</div>";
  }
  function pageViewer(image, label) {
    if (!image) return "";
    var images = Array.isArray(image) ? image : [image];
    var labels = Array.isArray(label) ? label : images.map(function (_, index) {
      return images.length > 1 ? label + " (" + (index + 1) + ")" : label;
    });
    return '<div class="book-page-gallery' + (images.length > 1 ? ' multiple-pages' : '') + '">' + images.map(function (item, index) {
      return '<figure class="book-page-viewer"><img src="' + esc(item) + '" alt="' + esc(labels[index] || label) + '" loading="lazy"><figcaption><span>' + esc(labels[index] || label) + '</span><a href="' + esc(item) + '" target="_blank" rel="noopener">Open full page</a></figcaption></figure>';
    }).join("") + '</div>';
  }
  function exerciseList(exercises) {
    return '<div class="exercise-grid">' + exercises.map(function (exercise) {
      return '<article class="exercise-item"><span>' + esc(exercise.label) + '</span><div>' + exercise.task + "</div></article>";
    }).join("") + "</div>";
  }
  function bookStop(config) {
    var image = pageViewer(config.image, config.imageLabel || (config.source.material + " " + config.source.page));
    return {
      kind: "book", title: config.title, kicker: "BOOK STOP &middot; " + config.source.material + " " + config.source.page,
      time: config.time, lead: config.lead,
      body: sourceBar(config.source) + '<div class="book-stop-layout' + (image ? " has-page" : "") + '"><div class="book-stop-work"><div class="no-book-banner"><strong>No book?</strong><span>' + esc(config.noBook || "Use the projected prompts. Write answers in your notebook.") + "</span></div>" + exerciseList(config.exercises) + "</div>" + image + "</div>",
      teacher: teacher(config.teacher)
    };
  }
  function checkpoint(config) {
    return {
      kind: "checkpoint", title: config.title, kicker: "CHECKPOINT &middot; DECIDE BEFORE MOVING ON",
      time: config.time, lead: config.lead,
      body: '<div class="checkpoint-card">' + config.task + '<div class="checkpoint-decisions" role="group" aria-label="Class readiness"><button type="button" data-checkpoint="support" data-guidance="' + esc(config.support) + '">Review</button><button type="button" data-checkpoint="ready" data-guidance="' + esc(config.ready) + '">Continue</button><button type="button" data-checkpoint="challenge" data-guidance="' + esc(config.challenge) + '">Challenge</button></div><div class="checkpoint-feedback" aria-live="polite">Choose the route that matches today\'s evidence.</div></div>',
      teacher: teacher(config.teacher)
    };
  }
  function standard(config) {
    return { kind: config.kind || "instruction", title: config.title, kicker: config.kicker, time: config.time, lead: config.lead, body: config.body, teacher: teacher(config.teacher) };
  }
  window.LINKIT_COMPONENTS = { bookStop: bookStop, checkpoint: checkpoint, pageViewer: pageViewer, sourceBar: sourceBar, standard: standard };
}());
