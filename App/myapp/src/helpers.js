import bcrypt from 'bcryptjs';

export const clamp = (value, min, max) => {
    if (value < min)
        return min;
    else if (value > max)
        return max;
    return value;
};

export const PasswordHash = (password) => {
    return bcrypt.hashSync(password, 10);
};