export const maxDecisionOptions = 50;
export const maxOptionLength = 120;

export const parseDecisionOptions = (text) => {
  const lines = String(text ?? "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.some((line) => line.length > maxOptionLength)) throw new Error(`Keep each option under ${maxOptionLength} characters.`);
  const seen = new Set();
  const options = lines.filter((option) => {
    const key = option.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (options.length > maxDecisionOptions) throw new Error(`Choose up to ${maxDecisionOptions} unique options.`);
  return options;
};

export const pickRandomOption = (options, random = Math.random) => {
  if (!Array.isArray(options) || options.length === 0) throw new Error("Add at least two options before picking.");
  if (options.length < 2) throw new Error("Add at least two options before picking.");
  const value = random();
  if (!Number.isFinite(value) || value < 0 || value >= 1) throw new Error("The random value must be between zero and one.");
  return options[Math.floor(value * options.length)];
};
