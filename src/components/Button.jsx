import React from "react";

export default function Button({ edit }) {
    if (edit) {
        return (
            <button type="submit" className="btn btn-block btn-success mt-3">
                edit
            </button>
        );
    } else {
        return (
            <button type="submit" className="btn btn-block btn-primary mt-3">
                add item
            </button>
        );
    }
}
