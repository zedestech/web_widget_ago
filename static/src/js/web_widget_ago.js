odoo.define('web.widget.ago', function (require) {
"use strict";

var basic_fields = require('web.basic_fields');
var registry = require('web.field_registry');
var core = require('web.core');

var _t = core._t;

function time_from_now(date) {
    if (moment().diff(date, 'seconds') < 15) {
        return _t("now");
    }
    return date.fromNow();
}

var FieldDateTimeAgo = basic_fields.FieldDateTime.extend({
        _renderReadonly: function () {
            this.$el.text(time_from_now(this.value));
        },
    });

registry
    .add('datetime_ago', FieldDateTimeAgo)

})