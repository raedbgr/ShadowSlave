"use client";
import { useState } from "react";
import "../../styles/globals.css";

export default function Profile() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
        // Clear the file input manually
        const fileInput = document.getElementById("profileImage");
        if (fileInput) {
            fileInput.value = "";
        }
    };

    return (
        <div className="content-box">
            <div className="profile-section">
                <div className="image-upload">
                    <label htmlFor="profileImage">Edit image:</label>
                    <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                    />

                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Profile Preview" />
                            <button className="remove-image-button" onClick={handleRemoveImage}>
                                Remove Image
                            </button>
                        </div>
                    )}
                </div>

                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>

                <div className="input-group">
                    <button className="reset-button">Reset Password</button>
                </div>
            </div>
        </div>
    );
}
