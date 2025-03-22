type SeverityString = 'error' | 'off' | 'warn';
type RuleLevelAndOptions = [SeverityString, ...unknown[]];
type RuleEntry = SeverityString | RuleLevelAndOptions;

export declare const baseRules: Record<string, RuleEntry>;
export declare const disabledBaseRules: Record<string, RuleEntry>;
export declare const importRules: Record<string, RuleEntry>;
export declare const simpleImportSortRules: Record<string, RuleEntry>;
export declare const stylisticRules: Record<string, RuleEntry>;
export declare const typescriptRules: Record<string, RuleEntry>;

export declare const {
  rules: {
    baseRules,
    disabledBaseRules,
    importRules,
    simpleImportSortRules,
    stylisticRules,
    typescriptRules,
  },
};
