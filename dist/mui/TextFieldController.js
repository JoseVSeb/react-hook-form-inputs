import { useMemo } from 'react';
import { useController } from 'react-hook-form';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useTextFieldController = function (props) {
    var params = useController(props);
    var _a = params.field, ref = _a.ref, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, _b = params.fieldState, invalid = _b.invalid, error = _b.error;
    return useMemo(function () { return ({
        textFieldProps: {
            name: name,
            onBlur: onBlur,
            onChange: onChange,
            value: value,
            disabled: disabled,
            inputRef: ref,
            error: invalid,
            helperText: error === null || error === void 0 ? void 0 : error.message,
        },
    }); }, [disabled, error === null || error === void 0 ? void 0 : error.message, invalid, name, onBlur, onChange, ref, value]);
};
var TextFieldController = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return children(useTextFieldController(props));
};

export { TextFieldController, useTextFieldController };
//# sourceMappingURL=TextFieldController.js.map
