
  Pod::Spec.new do |s|
    s.name = 'HatsaAuth'
    s.version = '0.0.3'
    s.summary = 'Firebase extra authentication options'
    s.license = 'MIT'
    s.homepage = 'none'
    s.author = 'Hatsa'
    s.source = { :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
    s.dependency 'Firebase/Core'
    s.dependency 'Firebase/Auth'
    s.static_framework = true
  end