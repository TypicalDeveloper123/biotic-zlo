const corpuscles = Vars.mods.locateMod("corpuscles").meta;

corpuscles.displayName = Core.bundle.get("mod.corpuscles.name");
corpuscles.author = Core.bundle.get("mod.corpuscles.author");
corpuscles.description = Core.bundle.get("mod.corpuscles.description");

corpuscles.subtitle = Core.bundle.get("mod.corpuscles.subtitle");

SaveFileReader.fallback.putAll(
  "biotic-zlo-distribution-aluminum-duct", "biotic-zlo-distribution-aluminum-channel",
  "biotic-zlo-distribution-aluminum-junction", "biotic-zlo-distribution-channel-junction",
  "biotic-zlo-distribution-aluminum-router", "biotic-zlo-distribution-channel-router",
  "biotic-zlo-distribution-aluminum-bridge", "biotic-zlo-distribution-channel-bridge",
  "biotic-zlo-liquid-liquid-junction", "biotic-zlo-liquid-fluid-junction",
  "biotic-zlo-liquid-liquid-router", "biotic-zlo-liquid-fluid-router",
  "biotic-zlo-liquid-liquid-bridge", "biotic-zlo-liquid-fluid-bridge"
)


