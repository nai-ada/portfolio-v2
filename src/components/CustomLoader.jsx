import React from "react";

export default function CustomLoader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-darkBackground z-50">
            <img src="/src/assets/loader.svg" className="w-16 h-16" alt="Loading..." />
        </div>
    );
}