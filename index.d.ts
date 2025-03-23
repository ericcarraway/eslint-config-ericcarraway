type SeverityString = `error` | `off` | `warn`;
type RuleLevelAndOptions = [SeverityString, ...unknown[]];
type RuleEntry = SeverityString | RuleLevelAndOptions;

export declare const baseRules: Record<string, RuleEntry>;
export declare const deprecatedNodeCommonJsRules: Record<string, RuleEntry>;
export declare const disabledBaseRules: Record<string, RuleEntry>;
export declare const disabledTypescriptExtensionRules: Record<
  string,
  RuleEntry
>;
export declare const disabledTypescriptPersonalRules: Record<string, RuleEntry>;
export declare const importRules: Record<string, RuleEntry>;
export declare const simpleImportSortRules: Record<string, RuleEntry>;
export declare const stylisticRules: Record<string, RuleEntry>;
export declare const typescriptRules: Record<string, RuleEntry>;

declare const _default: {
  rules: {
    baseRules: Record<string, RuleEntry>;
    deprecatedNodeCommonJsRules: Record<string, RuleEntry>;
    disabledBaseRules: Record<string, RuleEntry>;
    disabledTypescriptExtensionRules: Record<string, RuleEntry>;
    disabledTypescriptPersonalRules: Record<string, RuleEntry>;
    importRules: Record<string, RuleEntry>;
    simpleImportSortRules: Record<string, RuleEntry>;
    stylisticRules: Record<string, RuleEntry>;
    typescriptRules: Record<string, RuleEntry>;
  };
};

export default _default;
